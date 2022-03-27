import {
  Container,
  Header,
  Line,
  Content,
  Wrapper,
  AdditionalInfoContainer,
  AdditionalInfoWrapper,
  CategoriesWrapper,
  UrlLink,
  Category,
  SectionHeader,
} from "./Article.styles";
import Parser from "html-react-parser";
import { useTranslation } from "react-i18next";

const Article = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Header>{props.data.header}</Header>
        <Line />
        <Content>{Parser(props.data.description)}</Content>
      </Wrapper>
      <AdditionalInfoContainer>
        {props.data.urls[i18n.language] && props.data.urls[i18n.language].length ? <AdditionalInfoWrapper>
          <SectionHeader>{t("usefulLinks")}</SectionHeader>
          <Line smallMargin />
          {props.data.urls[i18n.language] ? props.data.urls[i18n.language].map((item, index) => (
            <UrlLink key={index} target="_blank" href={item}>
              <span>
                {item}
              </span>
            </UrlLink>
          )) : null}
        </AdditionalInfoWrapper> : null }
        {props.data.categories[i18n.language] && props.data.categories[i18n.language].length ? <AdditionalInfoWrapper>
          <SectionHeader>{t("categories")}</SectionHeader>
          <Line smallMargin />
          <CategoriesWrapper flex>
            {props.data.categories[i18n.language]
              ? props.data.categories[i18n.language].map((item, index) => (
                  <Category key={index}>{item}</Category>
                ))
              : null}
          </CategoriesWrapper>
        </AdditionalInfoWrapper> : null}
      </AdditionalInfoContainer>
    </Container>
  );
};

export default Article;
