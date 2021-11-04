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
  await checkIfCourseExists()
    })();
  }, []);
  
  const checkIfCourseExists = async () => {
    setLoading(true);
    const requestBody = {
      query: `
          query{
            courses(quantity: ${null}){
              link
            }
          }
          `,
    };
    try {
      const {
        data: {
          data: { courses: response },
        },
      } = await axios.post(`http://localhost:8081/graphql`, requestBody);
      console.log(response)
      if(!response.map(item => item.link).includes(props.match.params.courseName)) history.push("/courses");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

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
