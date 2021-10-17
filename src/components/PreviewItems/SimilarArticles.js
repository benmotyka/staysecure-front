import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";
import Article from "./Previews/Article";
const SimilarArticles = () => {
  return (
    <PageCentered>
      <Container>
        <Header>Podobne artykuły</Header>
        <Line></Line>
        <ItemsWrapper>
          {/* {articles.map(article => ( */}
          {/* <Article header={article.header} description={article.description} to={article.link} /> */}
          {/* ))} */}
        </ItemsWrapper>
      </Container>
    </PageCentered>
  );
};

export default SimilarArticles;
