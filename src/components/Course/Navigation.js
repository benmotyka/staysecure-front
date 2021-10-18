import {
  Container,
  ChangeSlideButton,
  Arrow,
  StepsWrapper,
  Step,
} from "./Navigation.styles";
const Navigation = (props) => {
  const changeSlide = (index) => {
    if (index >= props.data.length || index < 0) {
      return;
    } else {
      props.setActiveSlide(index);
    }
  };

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
    </Container>
  );
};

export default Navigation;
