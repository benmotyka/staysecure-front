import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "components/Loader/Loader";
import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";

import Course from "./Previews/Course";
const Courses = (props) => {

  useEffect(() => {
    (async () => {
      await getCourses();
    })();
  }, []);

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const requestBody = {
      query: `
          query{
            courses(quantity: ${props.quantity | null}, language: "${localStorage.getItem('i18nextLng')}"){
              header
              description
              difficulty
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
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
      setCourses(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <PageCentered>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Header>{props.header}</Header>
          <Line/>
          <ItemsWrapper>
            {courses.map((course, index) => (
              <Course
                key={index}
                to={`/course-preview/${course.link}`}
                img="preview.png"
                header={course.header}
                description={course.description}
                difficulty={course.difficulty}
              />
            ))}
          </ItemsWrapper>
        </Container>
      )}
    </PageCentered>
  );
};

export default Courses;
