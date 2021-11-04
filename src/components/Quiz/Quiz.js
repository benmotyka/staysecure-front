import { useEffect, useState } from "react";
import { Container, Footer, FooterText, NavigateArrow, Body, HeaderContainer, Header, Question, AnswersContainer, Answer } from "./Quiz.styles";
import axios from "axios"
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import Loader from "components/Loader/Loader";

const Quiz = (props) => {
    const history = useHistory();
    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(0)

    useEffect(() => {
      (async () => {
    if (!user) history.push("/login");
    await checkIfCourseFinished()
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
         const {data: response} = await axios.post(`http://localhost:8081/graphql`, requestBody, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          
          if(response.errors && response.errors[0].message === 'course-not-finished')
            {history.push(`/course/${props.courseName}`)} else {
              setLoading(false);
            }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <Container>
      {loading? <Loader/> : (
      <>
        <Body>
            <HeaderContainer>
                <Header>Pytanie 5</Header>
                <Question>Pytanie do quizu o ransomware</Question>
            </HeaderContainer>
            <AnswersContainer>
                <Answer>Odpowiedz 1</Answer>
                <Answer>Odpowiedz 2</Answer>
                <Answer>Odpowiedz 3</Answer>
                <Answer>Odpowiedz 4</Answer>
            </AnswersContainer>
        </Body>
      <Footer>
        <FooterText>
          <NavigateArrow back />Poprzednie pytanie
        </FooterText>
        <FooterText>Następne pytanie <NavigateArrow/></FooterText>
      </Footer>
      </>
      )}
    </Container>
  );
};

export default Quiz;
