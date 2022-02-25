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
import { useTranslation } from "react-i18next";

const CoursePreview = (props) => {
  const history = useHistory();
  const {t} = useTranslation()

  return (
    <Container>
      <Background backgroundUrl={process.env.PUBLIC_URL + "preview.png"}>
        <Header>{props.courseData.name}</Header>
        <div>
          <RateWrapper>
            <RateLevel />
            <RateLevel />
            <RateLevel />
            <RateLevel />
            <EmptyRateLevel />
          </RateWrapper>
          <RateDescription>{t('rate')}: 4/5</RateDescription>
          <RateSubDescription>17 {t('votes')}</RateSubDescription>
        </div>
      </Background>
      <Wrapper>
        <ContentWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <Line />{t('inThisCourseYouWillLearnAbout')}:
          </Description>
          <CourseTitlesWrapper>
            {props.courseData.content ? props.courseData.content.map((item, index) => (
              <CourseTitle key={index}>{item.header}</CourseTitle>
            )) : null}
          </CourseTitlesWrapper>
          <ButtonWrapper>
            <Button text={t('start')} 
            onClick={() => {
              history.push(`/course/${props.courseData.course}`);
            }}
            />
          </ButtonWrapper>
        </ContentWrapper>
        <ReviewWrapper>
          <CommentsHeader>
          {t('comments')} 
          </CommentsHeader>
            <CommentsWrapper>
              {/* <Comment>komentarz</Comment> */}
            </CommentsWrapper>
        </ReviewWrapper>
      </Wrapper>
    </Container>
  );
};

export default CoursePreview;
