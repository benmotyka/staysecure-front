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
  const {t} = useTranslation()

  return (
    <Container>
      <Wrapper>
        <Header>{props.name}</Header>
        <Line />
        <Content>{Parser(props.description)}</Content>
      </Wrapper>
      <AdditionalInfoContainer>
        <AdditionalInfoWrapper>
          <SectionHeader>{t('usefulLinks')}</SectionHeader>
          <Line smallMargin />
          <UrlLink target="_blank" href="https://wikipedia.org">
            https://wikipedia.org
          </UrlLink>
        </AdditionalInfoWrapper>
        <AdditionalInfoWrapper>
          <SectionHeader>{t('categories')}</SectionHeader>
          <Line smallMargin />
          <CategoriesWrapper flex>
            <Category>Privacy</Category>
          </CategoriesWrapper>
        </AdditionalInfoWrapper>
      </AdditionalInfoContainer>
    </Container>
  );
};

export default Article;
