import styled, { css } from "styled-components";
import colors from "constans/colors.js";

import { GiBreakingChain as ChainIcon } from "react-icons/gi";

import {
  MdSettingsApplications as AppIcon,
  MdMultilineChart as TcpIcon
} from "react-icons/md";

import {RiSignalWifiOffFill as NoSignalIcon} from "react-icons/ri"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h5`
  font-size: 24px;
  color: ${colors.orange};
`;

export const RelativeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Item = styled.div`
  width: 300px;
  position: absolute;
  border-radius: 15px;
  border: 1px solid ${colors.hoverOrange};
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkPurple};
`;

export const Description = styled.h4`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
  opacity: 0.8;
  margin: 0 0 10px 0;
`;

const Icon = css`
  font-size: 90px;
  color: ${colors.white};
  margin: auto;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${colors.white};
  opacity: 0.8;
  margin: 0 0 10px 0;
  text-align: center;
`;

export const App = styled(AppIcon)`
  ${Icon};
`;

export const Tcp = styled(TcpIcon)`
  ${Icon};
`;

export const Chain = styled(ChainIcon)`
  ${Icon};
`;

export const NoSignal = styled(NoSignalIcon)`
  ${Icon};
`;

const DdosTypes = () => {
  return (
    <Container>
      <Header></Header>
      <RelativeWrapper>
        <Item style={{ left: "15%", bottom: "10%" }}>
          <NoSignal />
          <Description>Ataki wolumetryczne</Description>
          <Text>Wysyłają fałszywy ruch celem zapełnienia przepustowości sieci, w której znajduje się instancja serwerowa, odbierając jej dostęp do internetu. Do tego celu często wykorzystywane są sieci botnet.</Text>
        </Item>
        <Item style={{ right: "25%", top: "0" }}>
          <Tcp />
          <Description>Ataki TCP</Description>
          <Text>Wykorzystują mechanizm uzgadniania trój-etapowego, konsumując zasoby instancji serwerowej szybciej, niż ta jest w stanie przetworzyć żądania.</Text>
        </Item>
        <Item style={{ left: "15%", top: "0" }}>
          <App />
          <Description>Ataki na warstwie aplikacyjnej</Description>
          <Text>
            Próbują nadużyć działanie samej aplikacji, poprzez nadsyłanie wielu żądań HTTP, tym samym generując fałszywy ruch i obciążając zasoby maszyny
          </Text>
        </Item>
        <Item style={{ right: "25%", bottom: "10%" }}>
          <Chain />
          <Description>Ataki fragmentacyjne</Description>
          <Text>
            Znane także jako ataki Teardrop, przesyłają one wiele małych,
            pofragmentowanych pakietów do maszyny, przez co ponowne złożenie
            wszystkich pakietów przeciąża docelową sieć
          </Text>
        </Item>
      </RelativeWrapper>
    </Container>
  );
};

export default DdosTypes;
