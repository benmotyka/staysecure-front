import Logo from "components/Logo/Logo";
import { PageOneChild } from "components/Pages/Pages.styles";

import RegisterCard from "components/Cards/Register";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

  return (
    <PageOneChild>
      <Helmet>
        <title>{t("helmet.titles.register")}</title>
      </Helmet>
      <Logo />
      <RegisterCard />
    </PageOneChild>
  );
};

export default Register;
