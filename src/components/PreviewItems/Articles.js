import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Wrapper, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import Article from "./Previews/Article";
import { useTranslation } from "react-i18next";
import LocalLoader from "components/Loader/LocalLoader";
const Articles = (props) => {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    (async () => {
      await getArticles();
    })();
  }, [window.location.pathname]);

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);


  const getArticles = async () => {
    const requestBody = {
      query: `
      query{
        articles(quantity: ${props.quantity | null}, language: "${i18n.language}", random: ${Boolean(props.random | false)}){
          header
          description
          link
        }
      }
      `,
    };
    try {
      const {
        data: {
          data: { articles: response },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
      setArticles(response);
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
