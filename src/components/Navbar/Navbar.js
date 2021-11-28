import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

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
const Navbar = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const {t} = useTranslation()

  return (
    <Container>
      <Section>
        <Logo />
      </Section>
      <Section>
        <List>
          
          <Item>
            <Link to="/articles">{t('header.articles')}</Link>
          </Item>
          <Item>
            <Link to="/courses">{t('header.courses')}</Link>
          </Item>
          {user ? (
            <Item>
              <Link to="/account/courses">
                <AccountIcon src="profile.svg" />
                {user.name}
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
        </List>
        <LanguageChooser/>
      </Section>
    </Container>
  );
};

export default Navbar;
