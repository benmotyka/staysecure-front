import { useHistory } from "react-router-dom";

import { Container, Item } from "./Sidebar.styles";
const Sidebar = () => {
  const history = useHistory();

  return (
    <Container>
      <Item header>Witaj, username</Item>
      <Item
        onClick={() => {
          history.push("/account/courses");
        }}
      >
        Moje kursy
      </Item>
      <Item
        onClick={() => {
          history.push("/account/settings");
        }}
      >
        Ustawienia
      </Item>
      <Item noBorder>Wyloguj</Item>
    </Container>
  );
};
export default Sidebar;
