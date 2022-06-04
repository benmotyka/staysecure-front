import Logo from "components/Logo/Logo";
import { PageOneChild } from "components/Pages/Pages.styles";

import LoginCard from "components/Cards/Login";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <PageOneChild>
      <Helmet>
        <title>{t("helmet.titles.login")}</title>
      </Helmet>
      <Logo />
      <LoginCard />
    </PageOneChild>
  );
};

export default Login;
