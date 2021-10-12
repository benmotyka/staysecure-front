import React from "react";

import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";
import Article from "./Previews/Article";
import {articles} from "./LatestItems.data"
const LatestArticles = () => {
  return (
    <PageCentered>
      <Container>
        <Header>Ostatnie artykuły</Header>
        <Line></Line>
        <ItemsWrapper>
          {articles.map(article => (
          <Article header={article.header} description={article.description} to={article.link} />
          ))}
        </ItemsWrapper>
      </Container>
    </PageCentered>
  );
};

export default LatestArticles;
