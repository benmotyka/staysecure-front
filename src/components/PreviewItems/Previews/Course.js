import React from "react";
import Parser from "html-react-parser";

import {
  Container,
  Image,
  Body,
  HeaderContainer,
  Header,
  Arrow,
  Description,
} from "./Previews.styles";
import Difficulty from "./Difficulty/Difficulty";
const Course = (props) => {
  return (
    <Container to={props.to} data-testid="preview__course">
        <Image src={props.img} />
      <Body>
        <HeaderContainer>
          <Header>
            {props.header}
            {<Difficulty level={props.difficulty} />}
          </Header>
          <Arrow />
        </HeaderContainer>
        <Description>{Parser(props.description)}</Description>
      </Body>
    </Container>
  );
};

export default Course;
