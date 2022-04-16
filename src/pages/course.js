import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import axios from "axios";
import { logout } from "features/userSlice";

import CourseNavbar from "components/Navbar/CourseNavbar";
import { PageCourse } from "components/Pages/Pages.styles";
import Navigation from "components/Course/Navigation";
import Loader from "components/Loader/GlobalLoader";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import coursesData from "components/Courses/course.data";
import Sidebar from "components/Course/Sidebar";
import ButtonsModal from "components/Modal/ButtonsModal";
import React from "react";
import MobileAlert from "components/MobileAlert/MobileAlert";
import DownloadCourses from "components/DownloadCourses/DownloadCourses";
import CourseTutorial from "components/CourseTutorial/CourseTutorial";
import FadeIn from "components/FadeIn/FadeIn";
const Course = (props) => {
  const ref = useRef();

  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedData, setLoadedData] = useState(0);
  const [content, setContent] = useState([]);
  const [courseAlreadyFinishedPopup, setCourseAlreadyFinishedPopup] =
    useState(0);
  const [loading, setLoading] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false)
  const [waitForCorrectAnswer, setWaitForCorrectAnswer] = useState(false);
  const history = useHistory();
  const user = useSelector(selectUser);
  const {t, i18n} = useTranslation()
  const dispatch = useDispatch();

  const courseName = props.match.params.courseName;
  useOnClickOutside(ref, () => setCourseAlreadyFinishedPopup(false));

  useEffect(() => {
    (async () => {
      if (!user) {
        history.push(`/login?courseRedirect=${courseName}`);
        return;
      }
      const localStorageLang =  i18n.language
      const courseData = coursesData.find((item) => item.course === courseName && item.language === localStorageLang);
      if (!courseData) {
        history.push("/courses");
        return;
      }
      if (user.accountLevel === "basic") {
        setContent(
          courseData.content.filter((slide) => slide.level === "basic")
        );
      }
      if (user.accountLevel === "advanced") {
        setContent(courseData.content);
      }
      setLoadedData(true);
      setLoading(true);
      await addCourseToStarted();
      setLoading(false);
    })();
  }, []);

  const checkCourseTutorial = async () => {
    const finishedTutorial = localStorage.getItem('finished_tutorial')
    if (!finishedTutorial) setShowTutorial(true)
  }

  const finishTutorial = () => {
    setShowTutorial(false)
    localStorage.setItem('finished_tutorial', 'true')
  }
  const addCourseToStarted = async () => {
    const requestBody = {
      query: `
      mutation AddCourseToStarted($courseName: String!){
        addCourseToStarted(courseName: $courseName){
          link
          }
        }
    `,
      variables: {
        courseName: courseName,
      },
    };
    try {
      const { data } = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data.errors) {
        if (data.errors[0].message === "course-already-finished") {
          setCourseAlreadyFinishedPopup(true);
        }
        if (data.errors[0].message === "course-not-found") {
          history.push("/courses");
        }
        if (data.errors[0].message === "unauthenticated") {
          dispatch(logout())
          history.push("/login");
        }
      } else {
        checkCourseTutorial();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restartCourse = async () => {
    const requestBody = {
      query: `
      mutation restartCourseAndQuiz($courseName: String!){
        restartCourseAndQuiz(courseName: $courseName){
          link
          }
        }
    `,
      variables: {
        courseName: courseName,
      },
    };
    try {
      await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      checkCourseTutorial();
    } catch (error) {
      console.log(error);
    } finally {
    setCourseAlreadyFinishedPopup(false);
    }
  };

  return (
    <>
      {user && loadedData && (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
                <FadeIn in={courseAlreadyFinishedPopup}>
                <ButtonsModal
                innerRef={ref}
                  header={t("courseFinishedQuesionHeader")}
                  text={t("courseFinishedQuesionDescription")}
                  button1Text={t("cancel")}
                  button2Text={t("start")}
                  button1OnClick={() => {
                    history.push("/courses");
                  }}
                  button2OnClick={() => {
                    restartCourse();
                  }}
                />
                </FadeIn>
                  <CourseNavbar setShowTutorial={setShowTutorial}/>
                  <Sidebar
                    waitForCorrectAnswer={waitForCorrectAnswer}
                    data={content}
                    activeSlide={activeSlide}
                  />
                  <PageCourse>
                    {content.map((step, index) => {
                      if (index === activeSlide)
                        return step.slide
                          ? React.cloneElement(step.slide, {
                              setWaitForCorrectAnswer,
                            })
                          : "";
                    })}
                  </PageCourse>
                  <Navigation
                    user={user}
                    data={content}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                    courseName={courseName}
                    waitForCorrectAnswer={waitForCorrectAnswer}
                    setWaitForCorrectAnswer={setWaitForCorrectAnswer}
                  />
                  <MobileAlert/>
                  {/* <DownloadCourses data={content}/> */}
                  <FadeIn in={showTutorial}>
                  <CourseTutorial finish={finishTutorial}/>
                  </FadeIn>
                </>
          )}
        </>
      )}
    </>
  );
};

export default Course;
