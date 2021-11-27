import {
  Container,
  ChangeSlideButton,
  Arrow,
  StepsWrapper,
  Step,
} from "./Navigation.styles";
import Modal from 'components/Modal/Modal'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import { useTranslation } from "react-i18next";

const Navigation = (props) => {
  const {t} = useTranslation()

  const [showEndingModal, setShowEndingModal] = useState(false)
  const history = useHistory();

  const changeSlide = (index) => {
    if (index < 0 || props.activeSlide < index - 1 || index === props.activeSlide) return;
    if (index >= props.data.length) { setShowEndingModal(true); return}
    if (props.waitForCorrectAnswer && props.activeSlide < index) return
    props.setWaitForCorrectAnswer(false)
    props.setActiveSlide(index);
  };

  const markCourseFinishedAndProceedToQuiz = async () => {
    const requestBody = {
      query: `
      mutation AddCourseToFinished($courseName: String!){
        addCourseToFinished(courseName: $courseName){
          link
          }
        }
    `,
      variables: {
        courseName: props.courseName,
      },
    };
    try {
     await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      });
      history.push(`/quiz/${props.courseName}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
        <ChangeSlideButton
        previous
        onClick={() => {
          changeSlide(props.activeSlide - 1);
        }}
      >
        <Arrow />
      </ChangeSlideButton>
      <StepsWrapper>
        {props.data.map((slide, index) => (
          <Step
            key={index}
            interactive={slide.interactive}
            active={props.activeSlide >= index ? true : false}
            onClick={() => {
              changeSlide(index);
            }}
          />
        ))}
      </StepsWrapper>
      <ChangeSlideButton
        onClick={() => {
          changeSlide(props.activeSlide + 1);
        }}
        disabled={props.waitForCorrectAnswer}
      >
        <Arrow />
      </ChangeSlideButton>
      {showEndingModal && <Modal header={t('courseFinishConfirmationHeader')} text={t('courseFinishConfirmationDescription')} button1Text={t('cancel')} button2Text={t('continue')} button1OnClick={() => {
        setShowEndingModal(false)
      }} 
      button2OnClick={() => {
        markCourseFinishedAndProceedToQuiz();
      }}
      />}
    </Container>
  );
};

export default Navigation;
