import React from "react";
import Navbar from "components/Navbar/Navbar";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { PageWrapper } from "components/Pages/Pages.styles";
import Articles from "components/PreviewItems/Articles";
import Courses from "components/PreviewItems/Courses";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.home")}</title>
      </Helmet>
      <Navbar />
      <Hero />
      <PageWrapper>
        <Courses header={t("lastCourses")} quantity={3} />
        <Articles header={t("lastArticles")} quantity={6} />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Home;
