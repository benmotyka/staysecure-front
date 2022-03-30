import { useTranslation } from "react-i18next";
import { Container, Header, HeaderContainer } from "../Cards.styles";
const OverallQuizSummary = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderContainer>
        <Header>{t('overallQuizesSummary')}</Header>
      </HeaderContainer>
    </Container>
  );
};

export default OverallQuizSummary;
