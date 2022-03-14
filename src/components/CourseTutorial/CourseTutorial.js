import Button from "components/Button/Button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  SidebarBox,
  SidebarWrapper,
  Text,
  ButtonWrapper,
  SlideBox,
  SlideWrapper,
  NavigationWrapper,
  NavigationBox,
  Highlight
} from "./CourseTutorial.styles";

const CourseTutorial = (props) => {
  const [step, setStep] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
      {step === 0 ? (
        <>
          <SidebarBox />
          <SidebarWrapper>
            <Text>
              <Highlight>{t('courseTutorial.sidebar')}</Highlight>{t('courseTutorial.sidebarDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.next')} noArrow small onClick={() => setStep(1)} />
            </ButtonWrapper>
          </SidebarWrapper>
        </>
      ) : null}
      {step === 1 ? (
        <>
          <SlideBox />
          <SlideWrapper>
            <Text>
            <Highlight>{t('courseTutorial.slide')}</Highlight> 
             {t('courseTutorial.slideDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.next')} noArrow small onClick={() => setStep(2)} />
            </ButtonWrapper>
          </SlideWrapper>
        </>
      ) : null}
      {step === 2 ? (
        <>
          <NavigationBox />
          <NavigationWrapper>
            <Text>
            <Highlight>{t('courseTutorial.navigation')}</Highlight> {t('courseTutorial.navigationDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.finish')} noArrow small onClick={props.finish} />
            </ButtonWrapper>
          </NavigationWrapper>
        </>
      ) : null}
    </Container>
  );
};

export default CourseTutorial;
