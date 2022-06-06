import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { BlankPage } from "components/Pages/Pages.styles";
import FaqWidget from "components/Faq/Faq";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.faq")}</title>
      </Helmet>
      <Navbar />
      <BlankPage>
        <FaqWidget />
      </BlankPage>
      <Footer />
    </>
  );
};

export default Faq;
