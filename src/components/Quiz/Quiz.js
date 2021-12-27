import { useEffect, useState } from "react";
import {
  Container,
  Footer,
  FooterText,
  NavigateArrow,
  Body,
  HeaderContainer,
  Header,
  Question,
  AnswersContainer,
  Answer,
} from "./Quiz.styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";

const Quiz = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [choosenAnswer, setChoosenAnswer] = useState(null)
  const [quizFinished, setQuizFinished] = useState(false)
  useEffect(() => {
    finishQuiz() //required for simulating asynchronous change of state for useranswers
  }, [quizFinished]);

  const finishQuiz = async () => {
    if (!quizFinished) return 
    setLoading(true)
    const requestBody = {
      query: `
            mutation FinishQuiz($course: String!, $answers: String!){
              finishQuiz(courseLink: $course, userAnswers: $answers){
                correctAnswers
                numberOfQuestions
              }
            }
            `,
      variables: {
        course: props.courseLink,
        answers: JSON.stringify(userAnswers),
      },
    };
    try {
      const response = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
        );
    } catch (error) {
      console.log(error)
    }
    history.push(`/quiz-summary/${props.courseLink}`)
    setLoading(false)
  }

  const updateUserAnswer = ((question) => {
    if(choosenAnswer === null) return
    setUserAnswers(userAnswers => [...userAnswers, {question, answer: choosenAnswer}]);
    if (currentQuestion >= props.quizData.length - 1) {
      return;
    }
    setChoosenAnswer(null)
    setCurrentQuestion(currentQuestion + 1);
  })

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {props.quizData.map((item, index) => {
            if (index === currentQuestion)
              return (
                <>
                  <Body>
                    <HeaderContainer>
                      <Header>Pytanie {index+1}/{props.quizData.length}</Header>
                      <Question>{item.question}</Question>
                    </HeaderContainer>
                    <AnswersContainer>
                      {item.answers.map((answer, index) => (
                        <Answer key={index}
                        choosen={choosenAnswer === answer}
                        onClick={() => {
                          setChoosenAnswer(answer)
                        }}
                        >{answer.text}</Answer>
                      ))}
                    </AnswersContainer>
                  </Body>
                  <Footer>
                    <FooterText  onClick={() => {
                        console.log(userAnswers)
                      }}>
                      {/* <NavigateArrow back/> */}
                      {/* Poprzednie pytanie */}
                    </FooterText>

                      {currentQuestion >= (props.quizData.length -1) ?  (
                    <FooterText onClick={() => {
                      updateUserAnswer(item.question)
                      setQuizFinished(true)
                      finishQuiz()
                    }}>
                      Zakończ quiz 
                    </FooterText>
                    )
                    : (
                <Button text="Następne pytanie"  onClick={() => {
                  updateUserAnswer(item.question)
              }}/>
                    )
                       } 
                  </Footer>
                </>
              );
          })}
        </Container>
      )}
    </>
  );
};

export default Quiz;
