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
const Navbar = () => {
  const history = useHistory();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Section>
        <Logo />
      </Section>
      <Section>
        <List>
          <Item>
            <Link to="/articles">Artykuły</Link>
          </Item>
          <Item>
            <Link to="/courses">Kursy</Link>
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
                <Link to="/login">Login</Link>
              </Item>
              <Item>
                <ButtonContainer>
                  <Button
                    onClick={() => {
                      history.push("/register");
                    }}
                    text="Rejestracja"
                  />
                </ButtonContainer>
              </Item>
            </>
          )}
        </List>
      </Section>
    </Container>
  );
};

export default Navbar;
