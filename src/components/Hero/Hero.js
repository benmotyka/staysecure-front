import { useHistory } from "react-router-dom";

import {
  Container,
  Header,
  SubheaderContainer,
  Subheader,
} from "components/Hero/Hero.styles";

import Logo from "components/Logo/Logo.js";
import Button from "components/Button/Button.js";
import { useTranslation } from "react-i18next";
import { useLogin } from "store/actions/user";
const Hero = () => {
  const history = useHistory();
  const { userDetails } = useLogin()
  const {t} = useTranslation()

  return (
    <Container backgroundUrl={process.env.PUBLIC_URL + '/hero_background.png'}>
      <Header data-testid="heroHeader">{t('heroHeader')}</Header>
      <SubheaderContainer>
        <Subheader>by</Subheader>
        <Logo />
      </SubheaderContainer>
      {userDetails.token ? (
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
