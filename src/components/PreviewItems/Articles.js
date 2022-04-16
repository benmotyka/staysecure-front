import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "components/Loader/GlobalLoader";

import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";
import Article from "./Previews/Article";
import { useTranslation } from "react-i18next";
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
    <PageCentered>
      {loading ? <Loader /> : (
      <Container>
      <Header>{props.header}</Header>
      <Line></Line>
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
    </Container>
      )}
    </PageCentered>
  );
};

export default Articles;
