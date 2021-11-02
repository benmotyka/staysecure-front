import { Container, Footer, FooterText, NavigateArrow, Body, HeaderContainer, Header, Question, AnswersContainer, Answer } from "./Quiz.styles";

const Quiz = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Quiz;
