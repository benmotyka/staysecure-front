import styled from "styled-components";
import colors from "constans/colors.js";

import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";
import { AiOutlineMonitor as MonitoringIcon } from "react-icons/ai";
import { useTranslation } from "react-i18next";

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
import { FaServer as ServerIcon, FaUser as UserIcon } from "react-icons/fa";

import { IoMdCloudy as CloudIcon } from "react-icons/io";

import {
  GiChart as ChartIcon,
  GiStoneWall as FirewallIcon,
} from "react-icons/gi";

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Server = styled(ServerIcon)`
  font-size: 80px;
  color: ${colors.white};
`;

const Cloud = styled(CloudIcon)`
  font-size: 120px;
  color: ${colors.orange};
`;

const Monitoring = styled(MonitoringIcon)`
  font-size: 120px;
  position: absolute;
  right: 75%;
  color: ${colors.white};
`;

const Chart = styled(ChartIcon)`
  font-size: 120px;
  color: ${colors.orange};
`;

const Firewall = styled(FirewallIcon)`
  font-size: 100px;
  color: ${colors.orange};
  transform: translate3d(0, 0, 50px);
`;

const User = styled(UserIcon)`
  font-size: 80px;
  color: ${colors.red};
`;

const DdosProtection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          {t("courses.dos.usingFirewalls")}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          {t("courses.dos.cloudMigration")}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          {t("courses.dos.monitoringResources")}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            {t("courses.dos.usingFirewallsDescription")}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <User />
              <Arrow />
              <Firewall />
              <Server />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            {t("courses.dos.cloudMigrationDescription")}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Server />
              <Arrow />
              <Cloud />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
            {t("courses.dos.monitoringResourcesDescription")}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Monitoring />
              <Chart />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default DdosProtection;
