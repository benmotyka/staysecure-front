import { logout } from "features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"

import { Container, Item } from "./Sidebar.styles";
const Sidebar = () => {

  const history = useHistory();

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <Container>
      {user && (
        <>
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
      </>
      )}
    </Container>
  );
};
export default Sidebar;
