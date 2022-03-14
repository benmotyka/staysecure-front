import Button from "components/Button/Button";
import React, { useState } from "react";

import {
  Container,
  SidebarBox,
  SidebarWrapper,
  Text,
  ButtonWrapper,
  SlideBox,
  SlideWrapper,
  NavigationWrapper,
  NavigationBox
} from "./CourseTutorial.styles";

const CourseTutorial = (props) => {
  const [step, setStep] = useState(0);
  return (
    <Container>
      {step === 0 ? (
        <>
          <SidebarBox />
          <SidebarWrapper>
            <Text>
              Sidebar
            </Text>
            <ButtonWrapper>
              <Button text="Next" noArrow small onClick={() => setStep(1)} />
            </ButtonWrapper>
          </SidebarWrapper>
        </>
      ) : null}
      {step === 1 ? (
        <>
          <SlideBox />
          <SlideWrapper>
            <Text>
              Slide content
            </Text>
            <ButtonWrapper>
              <Button text="Next" noArrow small onClick={() => setStep(2)} />
            </ButtonWrapper>
          </SlideWrapper>
        </>
      ) : null}
      {step === 2 ? (
        <>
          <NavigationBox />
          <NavigationWrapper>
            <Text>
              Navigation bar
            </Text>
            <ButtonWrapper>
              <Button text="Finish" noArrow small onClick={props.finish} />
            </ButtonWrapper>
          </NavigationWrapper>
        </>
      ) : null}
    </Container>
  );
};

export default CourseTutorial;
