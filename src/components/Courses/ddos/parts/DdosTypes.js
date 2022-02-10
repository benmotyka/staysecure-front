import styled, { css } from "styled-components";
import colors from "constans/colors.js";

import { GiBreakingChain as ChainIcon } from "react-icons/gi";
import { useTranslation } from "react-i18next";

import {
  MdSettingsApplications as AppIcon,
  MdMultilineChart as TcpIcon,
} from "react-icons/md";

import { RiSignalWifiOffFill as NoSignalIcon } from "react-icons/ri";

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
  const { t } = useTranslation();

  return (
    <Container>
      <Header></Header>
      <RelativeWrapper>
        <Item style={{ left: "15%", bottom: "10%" }}>
          <NoSignal />
          <Description>{t("courses.dos.volumetricAttack")}</Description>
          <Text>{t("courses.dos.volumetricAttackDescription")}</Text>
        </Item>
        <Item style={{ right: "25%", top: "0" }}>
          <Tcp />
          <Description>{t("courses.dos.tcpAttack")}</Description>
          <Text>{t("courses.dos.tcpAttackDescription")}</Text>
        </Item>
        <Item style={{ left: "15%", top: "0" }}>
          <App />
          <Description>{t("courses.dos.applicationAttack")}</Description>
          <Text>{t("courses.dos.applicationAttackDescription")}</Text>
        </Item>
        <Item style={{ right: "25%", bottom: "10%" }}>
          <Chain />
          <Description>{t("courses.dos.fragmentationAttack")}</Description>
          <Text>{t("courses.dos.fragmentationAttackDescription")}</Text>
        </Item>
      </RelativeWrapper>
    </Container>
  );
};

export default DdosTypes;
