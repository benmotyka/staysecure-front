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
import { useTranslation } from "react-i18next";
const Hero = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const {t} = useTranslation()

  return (
    <Container>
      <Header>{t('heroHeader')}</Header>
      <SubheaderContainer>
        <Subheader>by</Subheader>
        <Logo />
      </SubheaderContainer>
      {user ? (
        <Button
        onClick={() => {
          history.push("/courses");
        }}
        text={t('proceedToCourses')}
      />
      ) : (
        <Button
        onClick={() => {
          history.push("/register");
        }}
        text={t('register')}
      />
      )}
    </Container>
  );
};

export default Hero;
