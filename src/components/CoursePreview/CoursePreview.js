import Button from "components/Button/Button";
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
} from "./CoursePreview.styles";

const CoursePreview = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentHeaderWrapper>
          <Header>Kurs ransomware</Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet risus libero. Phasellus dignissim mi quis libero congue, vel
            placerat nisi egestas. Duis pellentesque leo ut eros suscipit
            scelerisque. Pellentesque venenatis fermentum libero in mattis.
            Vestibulum a accumsan libero. Integer finibus condimentum tempus.
            <br />
            <br />W tym kursie dowiesz się:
          </Description>
          <CourseTitlesWrapper>
            <CourseTitle>Czym jest ransomware?</CourseTitle>
            <CourseTitle>Rodzaje i typy ranwomware</CourseTitle>
            <CourseTitle>Jak się bronić?</CourseTitle>
          </CourseTitlesWrapper>
        </ContentHeaderWrapper>
        <ButtonWrapper>
          <Button text="ROZPOCZNIJ" />
        </ButtonWrapper>
      </ContentWrapper>
      <ReviewWrapper>
        <RateWrapper>
          <RateLevel />
          <RateLevel />
          <RateLevel />
          <RateLevel />
          <EmptyRateLevel />
        </RateWrapper>
        <RateDescription>Ocena: 4/5</RateDescription>
        <RateSubDescription>17 głosów</RateSubDescription>
        <CommentsContainer>
          <CommentsHeader>Komentarze</CommentsHeader>
          <CommentsWrapper>
            <Comment>komentarz</Comment>
            <Comment>komentarz</Comment>
            <Comment>komentarz</Comment>
            <Comment>komentarz</Comment>

          </CommentsWrapper>
        </CommentsContainer>
      </ReviewWrapper>
    </Container>
  );
};

export default CoursePreview;
