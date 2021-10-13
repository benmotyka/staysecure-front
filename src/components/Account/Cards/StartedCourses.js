import { useHistory } from "react-router-dom";
import { Container, Header, HeaderContainer } from "./Cards.styles";

import Button from "components/Button/Button";
import CoursePending from "./Parts/CoursePending";
const StartedCourses = () => {
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
      <CoursePending header="Backdoor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"/>
      <CoursePending header="Backdoor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"/>
    </Container>
  );
};

export default StartedCourses;
