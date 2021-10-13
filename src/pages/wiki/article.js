import Navbar from "components/Navbar/Navbar";
import SimilarArticles from "components/PreviewItems/SimilarArticles";
import Footer from "components/Footer/Footer";
import { PageCentered, PageWrapper } from "components/Pages/Pages.styles";
import Article from "components/Article/Article";

const wikiArticle = (props) => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <PageCentered>
          <Article name={props.match.params.articleName} />
        </PageCentered>
          <SimilarArticles />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default wikiArticle;
