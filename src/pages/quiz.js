import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NavbarClean from "components/Navbar/NavbarClean";
import QuizWidget from "components/Quiz/Quiz";
import { PageOneChild } from "components/Pages/Pages.styles";
import Loader from "components/Loader/GlobalLoader";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useLogin } from "store/actions/user";

const Quiz = (props) => {
  const {i18n} = useTranslation()
  const history = useHistory();
  const [quizData, setQuizData] = useState([]);
  const { userDetails } = useLogin()
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    (async () => {
      if (!userDetails) history.push("/login");
      await checkIfCourseFinished();
      await getQuizData();
    })();
  }, []);

  const checkIfCourseFinished = async () => {
    const requestBody = {
      query: `
              query CheckIfCourseFinished($courseLink: String!){
                checkIfCourseFinished(courseLink: $courseLink){
                  link
                  }
                }
            `,
      variables: {
        courseLink: props.match.params.courseName,
      },
    };
    try {
      const { data: response } = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${userDetails.token}`,
          },
        }
      );

      if (
        response.errors &&
        response.errors[0].message === "course-not-finished"
      ) {
        history.push(`/course/${props.match.params.courseName}`);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const getQuizData = async () => {
    const requestBody = {
      query: `
          query GetQuizData($courseLink: String!){
            getQuizData(courseLink: $courseLink){
              items {
                question {
                  ${language}
                }
                answers {
                  text {
                  ${language}
                  }
                }
              }
              }
            }
        `,
      variables: {
        courseLink: props.match.params.courseName,
      },
    };
    try {
      const {data}  = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${userDetails.token}`,
        },
      });
      if (data.errors && data.errors[0].message === 'quiz-finished') {
        history.push(`/quiz-summary/${props.match.params.courseName}`);
      } else {
        setQuizData(data.data.getQuizData.items);
      }
    } catch (error) {
      history.push(`/`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarClean />
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageOneChild includeNavbar>
            <QuizWidget
              language={language}
              courseLink={props.match.params.courseName}
              quizData={quizData}
              user={userDetails}
            />
          </PageOneChild>
        </>
      )}
    </>
  );
};

export default Quiz;
