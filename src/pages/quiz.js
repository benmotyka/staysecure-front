import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

import NavbarClean from 'components/Navbar/NavbarClean'
import QuizWidget from 'components/Quiz/Quiz'
import {PageOneChild} from 'components/Pages/Pages.styles'
import Loader from "components/Loader/Loader";
import axios from "axios";

const Quiz = (props) => {
    const history = useHistory();
    const [quizData, setQuizData] = useState([]);
    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
          if (!user) history.push("/login");
          await checkIfCourseFinished();
          await getQuizData();
        })();
      }, []);

      const checkIfCourseFinished = async () => {
        setLoading(true);
        const requestBody = {
          query: `
              query CheckIfCourseFinished($courseName: String!){
                checkIfCourseFinished(courseName: $courseName){
                  link
                  }
                }
            `,
          variables: {
            courseName: props.courseName,
          },
        };
        try {
          const { data: response } = await axios.post(
            `${window.env.API_URL}/graphql`,
            requestBody,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
    
          if (
            response.errors &&
            response.errors[0].message === "course-not-finished"
          ) {
            history.push(`/course/${props.courseName}`);
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      const getQuizData = async () => {
        setLoading(true);
        const requestBody = {
          query: `
          query GetQuizQuestions($courseLink: String!){
            getQuizQuestions(courseLink: $courseLink){
              _id
              question
              answers
              }
            }
        `,
          variables: {
            courseLink: props.match.params.courseName,
          },
        };
        try {
          const {
            data: {
              data: { getQuizQuestions: response },
            },
          } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
    
          setQuizData(response);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

    return (
        <>
        {loading? ( <Loader />) : (
            <>
            <NavbarClean/>
            <PageOneChild includeNavbar>
            <QuizWidget courseName={props.match.params.courseName} quizData={quizData} user={user}/>
            </PageOneChild>
            </>
        )}
        </>
    )
}

export default Quiz
