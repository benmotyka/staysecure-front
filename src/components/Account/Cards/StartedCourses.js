import { useHistory } from "react-router-dom";
import { Container, Header, HeaderContainer } from "./Cards.styles";

import Button from "components/Button/Button";
import CoursePending from "./Parts/CoursePending";
const StartedCourses = (props) => {
  const history = useHistory();

  return (
    <Container>
      <HeaderContainer>
        <Header>Rozpoczęte kursy</Header>
        <Button
          text="Rozpocznij nowy kurs"
          green
          plus
          onClick={() => {
            history.push("/courses");
          }}
        />
      </HeaderContainer>
      {props.coursesStarted && props.coursesStarted.map(course => (
              <CoursePending header={course.header} description={course.description} linkToCourse={course.link}/>  
      ))}
    </Container>
  );
};

export default StartedCourses;
