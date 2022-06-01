import FooterRegister from "components/Footer/FooterRegister";
import Logo from "components/Logo/Logo";
import { PageOneChild } from "components/Pages/Pages.styles";

import RegisterConfirmCard from "components/Cards/RegisterConfirm";
const confirm = (props) => {
  return (
    <PageOneChild>
      <Logo />
        <RegisterConfirmCard token={props.match.params.token} />
      <FooterRegister />
    </PageOneChild>
  );
};

export default confirm;
