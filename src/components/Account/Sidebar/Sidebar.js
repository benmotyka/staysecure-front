import { logout } from "features/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

import { Container, Item } from "./Sidebar.styles";
const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Item header>Witaj, {user.name}</Item>
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
      <Item
        noBorder
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Wyloguj
      </Item>
    </Container>
  );
};
export default Sidebar;
