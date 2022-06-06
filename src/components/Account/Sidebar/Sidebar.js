import { useHistory } from "react-router-dom";

import { Container, Item, Highlight } from "./Sidebar.styles";
import { useTranslation } from "react-i18next";
import { useLogin } from "store/actions/user";
import { useState } from "react";
import ButtonsModal from "components/Modal/ButtonsModal";
import FadeIn from "components/FadeIn/FadeIn";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { useRef } from "react";

const Sidebar = () => {
  const {t} = useTranslation()
  const ref = useRef();
  const history = useHistory();
  const { logoutUser, userDetails } = useLogin()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  useOnClickOutside(ref, () => setShowLogoutModal(false));

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
        onClick={() => setShowLogoutModal(true)}>
        {t('logout')}
      </Item>
      </>
      )}
      <FadeIn in={showLogoutModal}>
      <ButtonsModal
          innerRef={ref}
          header={t("logoutModalConfirm")}
          button1Text={t("cancel")}
          button2Text={t("logout")}
          button1OnClick={() => {
            setShowLogoutModal(false);
          }}
          button2OnClick={() => {
            logoutUser()
            history.push("/");
          }}
        />
        </FadeIn>
    </Container>
  );
};
export default Sidebar;
