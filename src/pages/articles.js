import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import { PageWrapperNoCentered } from "components/Pages/Pages.styles";
import Articles from "components/PreviewItems/Articles";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const Wiki = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.articles")}</title>
      </Helmet>
      <Navbar />
      <PageWrapperNoCentered>
        <Articles header={t("allArticles")} />
      </PageWrapperNoCentered>
      <Footer />
    </>
  );
};

export default Wiki;
