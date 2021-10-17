import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

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
  const user = useSelector(selectUser);

  return (
    <Container>
      <Header>Cyber Security Training</Header>
      <SubheaderContainer>
        <Subheader>by</Subheader>
        <Logo />
      </SubheaderContainer>
      {user ? (
        <Button
        onClick={() => {
          history.push("/courses");
        }}
        text="Przejdź do kursów"
      />
      ) : (
        <Button
        onClick={() => {
          history.push("/register");
        }}
        text="Rejestracja"
      />
      )}
    </Container>
  );
};

export default Hero;
