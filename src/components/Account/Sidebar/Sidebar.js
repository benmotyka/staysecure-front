import { useHistory } from "react-router-dom";

import { Container, Item, Highlight } from "./Sidebar.styles";
import { useTranslation } from "react-i18next";
import { useLogin } from "store/actions/user";
const Sidebar = () => {
  const {t} = useTranslation()

  const history = useHistory();
  const { logoutUser, userDetails } = useLogin()


  return (
    <Container>
      {userDetails && (
        <>
      <Item header noBorder>{t('welcome')},&nbsp; <Highlight>{ + userDetails.name > 15 ? userDetails.name?.substring(0, 15) + '...' : userDetails.name}</Highlight></Item>
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
          logoutUser()
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
