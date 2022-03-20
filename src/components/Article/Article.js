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
  LinkIcon,
} from "./Article.styles";
import Parser from "html-react-parser";
import { useTranslation } from "react-i18next";

const Article = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Header>{props.data.name}</Header>
        <Line />
        <Content>{Parser(props.data.description)}</Content>
      </Wrapper>
      <AdditionalInfoContainer>
        <AdditionalInfoWrapper>
          <SectionHeader>{t("usefulLinks")}</SectionHeader>
          <Line smallMargin />
          {props.data.urls.map((item, index) => (
            <UrlLink key={index} target="_blank" href={item}>
              <LinkIcon /> <span>{item}</span>
            </UrlLink>
          ))}
        </AdditionalInfoWrapper>
        <AdditionalInfoWrapper>
          <SectionHeader>{t("categories")}</SectionHeader>
          <Line smallMargin />
          <CategoriesWrapper flex>
            {props.data.categories[i18n.language]
              ? props.data.categories[i18n.language].map((item, index) => (
                  <Category key={index}>{item}</Category>
                ))
              : null}
          </CategoriesWrapper>
        </AdditionalInfoWrapper>
      </AdditionalInfoContainer>
    </Container>
  );
};

export default Article;
