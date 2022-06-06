import FooterRegister from "components/Footer/FooterRegister";
import Logo from "components/Logo/Logo";
import { PageOneChild } from "components/Pages/Pages.styles";

import RegisterConfirmCard from "components/Cards/RegisterConfirm";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ConfirmRegistration = (props) => {
  const { t } = useTranslation();

  return (
    <PageOneChild>
      <Helmet>
        <title>{t("helmet.titles.register")}</title>
      </Helmet>
      <Logo />
      <RegisterConfirmCard token={props.match.params.token} />
      <FooterRegister />
    </PageOneChild>
  );
};

export default ConfirmRegistration;
