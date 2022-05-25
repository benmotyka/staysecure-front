import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Wrapper, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import Article from "./Previews/Article";
import { useTranslation } from "react-i18next";
import LocalLoader from "components/Loader/LocalLoader";
import { useRecoilState } from "recoil";
import { articlesAtom } from "store/state/cache";
const Articles = ({header, random, quantity}) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    (async () => {
      await getArticles();
    })();
  }, []);
// }, [window.location.pathname]);

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [cachedItems, setCachedItems] = useRecoilState(articlesAtom);

  const getArticles = async () => {
    try {
    if (cachedItems.length) {
      return setArticles(cachedItems.slice(0,quantity))
    }
    const requestBody = {
      query: `
      query{
        articles(language: "${i18n.language}", random: ${Boolean(random | false)}){
          header
          description
          link
        }
      }
      `,
    };
      const {
        data: {
          data: { articles: response },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
      setArticles(response.slice(0,quantity));
      setCachedItems(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper  data-testid="articlesWrapper">
      <Container>
      <Header>{header}</Header>
      <Line></Line>
      {loading ? <LocalLoader /> : (
      <ItemsWrapper>
        {articles.map((article, index) => (
          <Article
            key={index}
            header={article.header}
            description={article.description}
            to={`/article/${article.link}`}
          />
        ))}
      </ItemsWrapper>
      )}
    </Container>
    </Wrapper>
  );
};

export default Articles;
