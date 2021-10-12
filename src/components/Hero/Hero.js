import { useHistory } from "react-router-dom";

import {
  Container,
  Header,
  SubheaderContainer,
  Subheader,
} from "components/Hero/Hero.styles";

import Logo from "components/Logo/Logo.js";
import Button from "components/Button/Button.js";
const Hero = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>Cyber Security Training</Header>
      <SubheaderContainer>
        <Subheader>by</Subheader>
        <Logo />
      </SubheaderContainer>
      <Button
        onClick={() => {
          history.push("/register");
        }}
        text="Rejestracja"
      />
    </Container>
  );
};

export default Hero;
