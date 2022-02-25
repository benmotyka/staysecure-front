import Button from "components/Button/Button";
import { useHistory } from "react-router-dom";
import { Line } from "components/PreviewItems/PreviewItems.styles";
import {
  Container,
  ReviewWrapper,
  ContentWrapper,
  RateWrapper,
  CommentsWrapper,
  Comment,
  Header,
  Description,
  ContentHeaderWrapper,
  CourseTitlesWrapper,
  CourseTitle,
  ButtonWrapper,
  RateLevel,
  EmptyRateLevel,
  RateDescription,
  RateSubDescription,
  CommentsHeader,
  CommentsContainer,
  Wrapper,
  Background,
  HeaderContainer,
} from "./CoursePreview.styles";

const CoursePreview = (props) => {
  const history = useHistory();

  return (
    <Container>
      <Background backgroundUrl={process.env.PUBLIC_URL + "preview.png"}>
        <Header>Kurs ransomware</Header>
        <div>
          <RateWrapper>
            <RateLevel />
            <RateLevel />
            <RateLevel />
            <RateLevel />
            <EmptyRateLevel />
          </RateWrapper>
          <RateDescription>Ocena: 4/5</RateDescription>
          <RateSubDescription>17 głosów</RateSubDescription>
        </div>
      </Background>
      <Wrapper>
        <ContentWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet risus libero. Phasellus dignissim mi quis libero congue, vel
            placerat nisi egestas. Duis pellentesque leo ut eros suscipit
            scelerisque.
            <Line />W tym kursie dowiesz się:
          </Description>
          <CourseTitlesWrapper>
            <CourseTitle>Czym jest ransomware?</CourseTitle>
            <CourseTitle>Rodzaje i typy ranwomware</CourseTitle>
            <CourseTitle>Jak się bronić?</CourseTitle>
          </CourseTitlesWrapper>
          <ButtonWrapper>
            <Button text="ROZPOCZNIJ" 
            onClick={() => {
              history.push(`/course/${props.courseName}`);
            }}
            />
          </ButtonWrapper>
        </ContentWrapper>
        <ReviewWrapper>
          <CommentsHeader>Komentarze</CommentsHeader>
            <CommentsWrapper>
              <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment> <Comment>komentarz</Comment>
              <Comment>komentarz</Comment>
            </CommentsWrapper>
        </ReviewWrapper>
      </Wrapper>
    </Container>
  );
};

export default CoursePreview;
