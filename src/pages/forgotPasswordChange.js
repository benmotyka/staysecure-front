import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { PageOneItemCentered } from "components/Pages/Pages.styles";
import ForgotPasswordChangeWidget from "components/Cards/ForgotPasswordChange";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ForgotPasswordChange = (props) => {
  const { t } = useTranslation();
  const token = props.match.params.token;
  
  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.login")}</title>
      </Helmet>
      <Navbar />
      <PageOneItemCentered>
        <ForgotPasswordChangeWidget token={token} />
      </PageOneItemCentered>
      <Footer />
    </>
  );
};

export default ForgotPasswordChange;
