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

  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    setLoading(true);
    const requestBody = {
      query: `
          query{
            courses(quantity: ${props.quantity | null}){
              header
              description
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
      setCourses(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageCentered>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Header>{props.header}</Header>
          <Line></Line>
          <ItemsWrapper>
            {courses.map((course) => (
              <Course
                to={`/courses/${course.link}`}
                img="preview.png"
                header={course.header}
                description={course.description}
              />
            ))}
          </ItemsWrapper>
        </Container>
      )}
    </PageCentered>
  );
};

export default Courses;
