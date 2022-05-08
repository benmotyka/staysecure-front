import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Wrapper, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import Article from "./Previews/Article";
import { useTranslation } from "react-i18next";
import LocalLoader from "components/Loader/LocalLoader";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articlesAtom } from "store/state/cache";
const Articles = (props) => {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    (async () => {
      await getArticles();
    })();
  }, [window.location.pathname]);

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const cachedItems = useRecoilValue(articlesAtom)
  const setCachedItems = useSetRecoilState(articlesAtom);

  const getArticles = async () => {
    try {
    if (cachedItems.length) {
      return setArticles(cachedItems)
    }
    const requestBody = {
      query: `
      query{
        articles(language: "${i18n.language}", random: ${Boolean(props.random | false)}){
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
      setArticles(response);
      setCachedItems(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
      <Header>{props.header}</Header>
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
