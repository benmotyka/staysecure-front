import { useHistory } from "react-router-dom";
import { Container, Header, HeaderContainer } from "./Cards.styles";

import Button from "components/Button/Button";
import CoursePending from "./Parts/CoursePending";
import { useTranslation } from "react-i18next";
const StartedCourses = (props) => {
  const {t} = useTranslation()

  const history = useHistory();

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
              <CoursePending header={course.header} key={index} description={course.description} linkToCourse={course.link}/>  
      ))}
    </Container>
  );
};

export default StartedCourses;
