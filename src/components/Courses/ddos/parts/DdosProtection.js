import styled, { css } from "styled-components";
import colors from "constans/colors.js";

import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import { AiFillWarning as WarningIcon,
  AiOutlineMonitor as MonitoringIcon
} from "react-icons/ai";

import {
    Container,
    HeaderWrapper,
    Button,
    ContentWrapper,
    ContentHeader,
    ContentBody,
    FlexCenterWrapper,
  } from "../../ransomware/styles.js";
  import { IoIosArrowForward as ArrowIcon } from "react-icons/io";
  import { BsShieldFillCheck as CheckIcon } from "react-icons/bs";
import { FaServer as ServerIcon, 
  FaUser as UserIcon, 
} from "react-icons/fa";
import {
  FaRegFileCode as EncodeIcon,
} from "react-icons/fa";

import {IoMdCloudy as CloudIcon} from "react-icons/io"

import {GiChart as ChartIcon,
  GiStoneWall as FirewallIcon
} from "react-icons/gi"
  const RelativeContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Encode = styled(EncodeIcon)`
  font-size: 120px;
  color: ${colors.white};
  position: absolute;
  top: -10px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Check = styled(CheckIcon)`
  font-size: 60px;
  color: ${colors.lightGreen};
  position: absolute;
  right: -25px;
  top: -30px;
`;

const Server = styled(ServerIcon)`
  font-size: 80px;
  color: ${colors.white};
`;

const CodeText = styled.samp`
font-size: 18px;
color: ${colors.white};
`

const LaptopCodeText = styled.samp`
font-size: 13px;
color: ${colors.orange};
position: absolute;
bottom: 55px;
`

const Laptop = styled(LaptopIcon)`
font-size: 150px;
color: ${colors.white};
`

const Warning = styled(WarningIcon)`
font-size: 50px;
color: ${colors.orange};
position: absolute;
top: 30px;
`;

const Cloud = styled(CloudIcon)`
font-size: 120px;
color: ${colors.orange};
`

const Monitoring = styled(MonitoringIcon)`
font-size: 120px;
position: absolute;
right: 75%;
color: ${colors.white};
`

const Chart = styled(ChartIcon)`
font-size: 120px;
color: ${colors.orange};
`

const Firewall = styled(FirewallIcon)`
font-size: 100px;
color: ${colors.orange};
transform: translate3d(0,0,50px);
`

const User = styled(UserIcon)`
font-size: 80px;
color: ${colors.red};
`

const DdosProtection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Container>
        <HeaderWrapper>
          <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
            Wykorzystywanie firewalli
          </Button>
          <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
            Migracja do chmury
          </Button>
          <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
            Monitorowanie zasobów
          </Button>
        </HeaderWrapper>
        {activeSlide === 0 && (
          <ContentWrapper>
            <ContentHeader>
              Stosowanie firewalli to podstawa przeciw każdego rodzaju atakom, nie tylko typu DDOS. W przypadku stron internetowych należy pamiętać o tym, żeby maszyna, na której skonfigurowany jest serwer webowy, miała otwarte na świat tylko te porty, które są konieczne do funkcjonowania witryny (HTTP/HTTPS). Wykorzystywanie różnorakich zasad - w zależności od firewalla - jest także dobrym rozwiązaniem. Warto jednak mieć na uwadze, że stosowanie restrykcyjnych reguł w firewallach może odrzucać także część zwykłych użytkowników. Kluczem jest odpowiednie wyważenie reguł odrzucających. 
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
                <User/>
              <Arrow />
                <Firewall/>
                <Server/>

              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}{" "}
        {activeSlide === 1 && (
          <ContentWrapper>
            <ContentHeader>
              Jeśli przedsiębiorstwo z tradycyjnym typem infrastruktury (własnymi fizycznymi urządzeniami) boryka się z problemami ataków DDOS lub nieregularnego ruchu, warto rozważyć opcję migracji obecnego stanu infrastruktury do chmur publicznych. Zapewniają one dynamiczną możliwość skalowania instancji serwerowych w zależności od ruchu na stronie, więc w przypadku zwiększonego ruchu lub ataku DDOS, problem niedostępności może być częściowo zniwelowany dzięki utworzeniu kolejnych maszyn.
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
                <Server/>
              <Arrow />
              <Cloud/>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
        {activeSlide === 2 && (
          <ContentWrapper>
            <ContentHeader>
              Jest to jeden z kluczowych elementów pozwalających na ochronę przeciw atakom DDOS. Dzięki aktywnemu monitorowaniu zasobów maszyn można stworzyć modele zużycia zasobów (procesora, pamięci RAM) w ciągu dnia. Pozwala to przede wszystkim na zauważenie anomalii w postaci ataków DDOS. W przypadku gdy pojawiają się one w pewnych schematach, można przykładowo zastosować odpowiednie reguły w firewallach, celem odrzucania nawet mniej podejrzanych żądań przez dany okres czasu.
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
               <Monitoring/>
               <Chart/>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
      </Container>
    )
}

export default DdosProtection
