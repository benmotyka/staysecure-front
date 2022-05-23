import { useHistory } from "react-router-dom";

import {
  Container,
  Section,
  List,
  Item,
  ButtonContainer,
  Link,
  AccountIcon,
} from "./Navbar.styles";

import Button from "components/Button/Button.js";
import Logo from "components/Logo/Logo.js";
import { useTranslation } from "react-i18next";
import LanguageChooser from "components/LanguageChooser/LanguageChooser";
import { useLogin } from "store/actions/user";
const Navbar = () => {
  const history = useHistory();
  const { userDetails } = useLogin()
  const {t} = useTranslation()

  return (
    <Container>
      <Section>
        <Logo />
      </Section>
      <Section>
        <List>
        <Item>
            <Link to="/faq">{t('header.faq')}</Link>
          </Item>
          <Item>
            <Link to="/articles">{t('header.articles')}</Link>
          </Item>
          <Item>
            <Link to="/courses">{t('header.courses')}</Link>
          </Item>
          {userDetails ? (
            <Item>
              <Link to="/account/courses">
                <AccountIcon src="profile.svg" />
                {userDetails.name}
              </Link>
            </Item>
          ) : (
            <>
              <Item>
                <Link to="/login">{t('login')}</Link>
              </Item>
              <Item>
                <ButtonContainer>
                  <Button
                    onClick={() => {
                      history.push("/register");
                    }}
                    text={t('register')}
                  />
                </ButtonContainer>
              </Item>
            </>
          )}
          <Item>
        <LanguageChooser/>
          </Item>
        </List>
      </Section>
    </Container>
  );
};

export default Navbar;
