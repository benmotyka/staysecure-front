import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import axios from "axios"

import NavbarClean from "components/Navbar/NavbarClean";
import { PageCourse } from "components/Pages/Pages.styles";
import Navigation from "components/Course/Navigation";
import Loader from "components/Loader/Loader";

import content from "components/Courses/sqlInjection/course.data";
import Sidebar from "components/Course/Sidebar";
const Course = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(0)
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    (async () => {
  if (!user) history.push("/login");
  setLoading(true);
  await addCourseToStarted()
  setLoading(false);
    })();
  }, []);
  
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
        courseName: props.match.params.courseName,
      },
    };
    try {
     const {data: {data: {addCourseToStarted: {link}}}} = await axios.post(`http://localhost:8081/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      console.log(error);
      history.push("/courses");
    }
  }

  return (
    <>
      {user && (
        <>
        {loading? <Loader/> : (
          <>
          <NavbarClean />
          <Sidebar data={content} activeSlide={activeSlide} />
          <PageCourse>
            {content.map((step, index) => {
              if (index === activeSlide) return step.slide;
            })}
          </PageCourse>
          <Navigation
            user={user}
            data={content}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            courseName={props.match.params.courseName}
          />
          </>
        )}
        </>
      )}
    </>
  );
};

export default Course;
