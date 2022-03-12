import Button from "components/Button/Button";
import React from "react";

import { Container, SidebarWrapper } from "./CourseTutorial.styles";

const CourseTutorial = (props) => {
  return (
    <Container>
        <SidebarWrapper>

        </SidebarWrapper>
      <Button text="OK" noArrow small onClick={props.finish} />
    </Container>
  );
};

export default CourseTutorial;
