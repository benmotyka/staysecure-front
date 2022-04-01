import { useTranslation } from "react-i18next";
import {
  Container,
  Header,
  HeaderContainer,
  ChartWrapper,
} from "../Cards.styles";
import ChartDonut from "components/Charts/Donut";

const OverallQuizSummary = () => {
  const { t } = useTranslation();
  const data = [
    { value: 70 },
    { value: 30 }
  ];
  return (
    <Container>
      <HeaderContainer>
        <Header>{t("overallQuizesSummary")}</Header>
      </HeaderContainer>
      <ChartWrapper>
        <ChartDonut data={data} />
        Najlepszy wynik:
        Najgorszy wynik:
      </ChartWrapper>
    </Container>
  );
};

export default OverallQuizSummary;
