import Button from "components/Button/Button";
import { useHistory } from "react-router-dom";
import { Line } from "components/PreviewItems/PreviewItems.styles";
import {
  Container,
  ReviewWrapper,
  ContentWrapper,
  RateWrapper,
  CommentsWrapper,
  Header,
  Description,
  CourseTitlesWrapper,
  CourseTitle,
  ButtonWrapper,
  RateLevel,
  EmptyRateLevel,
  RateDescription,
  RateSubDescription,
  CommentsHeader,
  Wrapper,
  Background,
} from "./CoursePreview.styles";
import { useTranslation } from "react-i18next";
import Comment from "./Comment/Comment";

const CoursePreview = (props) => {
  const history = useHistory();
  const {t} = useTranslation()

  return (
    <Container>
      <Background backgroundUrl={process.env.PUBLIC_URL + "preview.png"}>
        <Header>{props.courseData.name}</Header>
        <div>
          <RateWrapper>
              {[...Array(Math.round(props.courseRating.averageRate))].map((level, index) => (
                <RateLevel key={index} />
              ))}
              {[...Array(5 - Math.round(props.courseRating.averageRate))].map((level, index) => (
                <EmptyRateLevel key={index} />
              ))}
          </RateWrapper>
          <RateDescription>{t('rate')}: {Math.round(props.courseRating.averageRate*1e2)/1e2}/5</RateDescription>
          <RateSubDescription>{props.courseRating.votes} {t('votes')}</RateSubDescription>
        </div>
      </Background>
      <Wrapper>
        <ContentWrapper>
          <Description>
            {props.courseData.description}
          </Description>
            <Line />
          <Description>
            {t('inThisCourseYouWillLearnAbout')}:
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
              {props.courseRating.comments.map((item, index) => (
              <Comment key={index} comment={item.comment} createdAt={item.createdAt} username={item.username}/>
              ))}
            </CommentsWrapper>
        </ReviewWrapper>
      </Wrapper>
    </Container>
  );
};

export default CoursePreview;
