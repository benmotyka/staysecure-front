import { useTranslation } from "react-i18next";
import {
  Container,
  Header,
  HeaderContainer,
  ChartWrapper,
} from "../Cards.styles";
import ChartDonut from "components/Charts/Donut";

const OverallQuizSummary = (props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderContainer>
        <Header>{t("overallQuizesSummary")}</Header>
      </HeaderContainer>
      <ChartWrapper>
        <ChartDonut data={props.chartData} />
      </ChartWrapper>
    </Container>
  );
};

export default OverallQuizSummary;
