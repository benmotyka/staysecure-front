import React from "react";

import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";

import Course from "./Previews/Course";
const AllCourses = () => {
  return (
    <PageCentered>
      <Container>
        <Header>Wszystkie kursy</Header>
        <Line></Line>
        <ItemsWrapper>
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
          <Course img="preview.png" header="Backdoor" description="lorem ipsum costam blac" />
        </ItemsWrapper>
      </Container>
    </PageCentered>
  );
};

export default AllCourses;
