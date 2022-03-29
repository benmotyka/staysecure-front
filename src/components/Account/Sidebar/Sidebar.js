import { logout } from "features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"

import { Container, Item, Highlight } from "./Sidebar.styles";
import { useTranslation } from "react-i18next";
const Sidebar = () => {
  const {t} = useTranslation()

  const history = useHistory();

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <Container>
      {user && (
        <>
      <Item header noBorder>{t('welcome')},&nbsp; <Highlight>{ + user.name > 15 ? user.name?.substring(0, 15) + '...' : user.name}</Highlight></Item>
      <Item
        onClick={() => {
          history.push("/account/courses");
        }}
      >
        {t('myCourses')}
      </Item>
      <Item
        onClick={() => {
          history.push("/account/quizes");
        }}
      >
        {t('myQuizes')}
      </Item>
      <Item
        onClick={() => {
          history.push("/account/settings");
        }}
      >
        {t('settings')}
      </Item>
      <Item
        noBorder
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        {t('logout')}
      </Item>
      </>
      )}
    </Container>
  );
};
export default Sidebar;
