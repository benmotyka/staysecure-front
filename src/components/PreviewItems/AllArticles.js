import React from "react";

import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";
import Article from "./Previews/Article";
const AllArticles = () => {
  return (
    <PageCentered>
      <Container>
        <Header>Wszystkie artykuły</Header>
        <Line></Line>
        <ItemsWrapper>
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
          <Article header="Backdoor" description="lorem ipsum costam blac" />
        </ItemsWrapper>
      </Container>
    </PageCentered>
  );
};

export default AllArticles;
