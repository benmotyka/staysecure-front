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


const Navigation = (props) => {

  const [showEndingModal, setShowEndingModal] = useState(false)
  const history = useHistory();

  const changeSlide = (index) => {
    if (index < 0) return;
    if (index >= props.data.length) { setShowEndingModal(true); return}
    props.setActiveSlide(index);
  };

  const markCourseFinished = (courseName) => {
    console.log(courseName)
    //send req that user finished course
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
      >
        <Arrow />
      </ChangeSlideButton>
      {showEndingModal && <Modal header="Czy chcesz zakończyć kurs?" text="Kurs kończy się quizem. Czy chcesz zakończyć kurs i przejść do quizu?" button1Text="Anuluj" button2Text="Przejdź" button1OnClick={() => {
        setShowEndingModal(false)
      }} 
      button2OnClick={() => {
        markCourseFinished(props.courseName);
        history.push(`/quiz/${props.courseName}`);
      }}
      />}
    </Container>
  );
};

export default Navigation;
