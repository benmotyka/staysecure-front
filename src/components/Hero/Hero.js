import React from "react";

import {
  Container,
  Header,
  SubheaderContainer,
  Subheader,
} from "components/Hero/Hero.styles";

import Logo from "components/Logo/Logo.js";
import Button from "components/Button/Button.js"
const Hero = () => {
  return (
    <Container>
      <Header>Cyber Security Training</Header>
      <SubheaderContainer>
        <Subheader>by</Subheader>
        <Logo />
      </SubheaderContainer>
      <Button text="Rejestracja"/>
    </Container>
  );
};

export default Hero;
