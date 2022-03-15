import { useState, useRef } from "react";
import {
  Container,
  Section,
  CourseSettings,
  CourseSettingsContainer,
  CourseSettingsWrapper,
} from "./Navbar.styles";

import Logo from "components/Logo/Logo.js";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import Button from "components/Button/Button";
import FadeIn from "components/FadeIn/FadeIn";
import { useTranslation } from "react-i18next";


const CourseNavbar = (props) => {
  const ref = useRef();
  const {t} = useTranslation()

  const [showSettings, setShowSettings] = useState(false);
  useOnClickOutside(ref, () => setShowSettings(false));

  return (
    <Container smallPadding>
      <Section>
        <Logo />
      </Section>
      <CourseSettingsContainer ref={ref}>
        <CourseSettings onClick={() => setShowSettings(!showSettings)} />
        <FadeIn in={showSettings}>
          <CourseSettingsWrapper show={showSettings}>
            <Button small noArrow text={t('courseTutorial.restart')} onClick={() => {
                props.setShowTutorial(true)
                setShowSettings(false)
            }}/>
          </CourseSettingsWrapper>
        </FadeIn>
      </CourseSettingsContainer>
    </Container>
  );
};

export default CourseNavbar;
