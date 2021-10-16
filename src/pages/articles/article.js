import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "components/Loader/Loader";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import { PageCentered, PageWrapper } from "components/Pages/Pages.styles";
import ArticleContent from "components/Article/Article";
import Articles from "components/PreviewItems/Articles";

const Article = (props) => {

  useEffect(() => {
    (async () => {
      await getArticle();
    })();
  }, [window.location.pathname]);

  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    header: "",
    description: ""
  });

  const getArticle = async () => {
    setLoading(true);
    const requestBody = {
      query: `
          query{
            article(link: ${JSON.stringify(props.match.params.articleName)}){
              header
              description
            }
          }
          `,
    };
    try {
      const {
        data: {
          data: { article: response },
        },
      } = await axios.post(`http://localhost:8081/graphql`, requestBody);
      console.log(response)
      setArticle(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <PageCentered>
          <ArticleContent name={article.header} description={article.description} />
        </PageCentered>
            <Articles header="Podobne artykuły" quantity={6} random/>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Article;
