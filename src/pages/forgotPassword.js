import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { PageOneItemCentered } from "components/Pages/Pages.styles";
import ForgotPasswordWidget from "components/Cards/ForgotPassword";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.login")}</title>
      </Helmet>
      <Navbar />
      <PageOneItemCentered>
        <ForgotPasswordWidget />
      </PageOneItemCentered>
      <Footer />
    </>
  );
};

export default ForgotPassword;
