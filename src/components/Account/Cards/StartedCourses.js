import { useHistory } from "react-router-dom";
import { Container, Header, HeaderContainer } from "./Cards.styles";

import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ListItem from "./Parts/ListItem";
const StartedCourses = (props) => {
  const {t, i18n} = useTranslation()

  const history = useHistory();

  const [startedLang, setStartedLang] = useState(i18n.language)

  return (
    <Container>
      <HeaderContainer>
        <Header>{t('startedCourses')}</Header>
        <Button
          text={t('startNewCourse')}
          green
          plus
          onClick={() => {
            history.push("/courses");
          }}
        />
      </HeaderContainer>
      {props.coursesStarted && props.coursesStarted.map((course, index) => (
        <ListItem header={course.header[startedLang]} key={index} description={course.description[startedLang]} buttonLink={`/course/${course.link}`} buttonText={t('continue')}/>  
      ))}
    </Container>
  );
};

export default StartedCourses;
