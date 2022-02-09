import styled from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Item = styled.div`
  position: absolute;
  border-radius: 15px;
  border: 1px solid ${colors.hoverOrange};
  padding: 10px;
  background-color: ${colors.darkPurple};
`;

export const Description = styled.h4`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
  opacity: 0.8;
  margin: 0;
`;

const XssConsequences = () => {
  const { t } = useTranslation();

  return (
    <Container>
        <Item style={{ left: "10%", top: "40%" }}>
          <Description>{t("courses.xss.dataTheft")}</Description>
        </Item>
        <Item style={{ left: "10%", top: "12%" }}>
          <Description>{t("courses.xss.cameraAccess")}</Description>
        </Item>
        <Item style={{ right: "10%", top: "12%" }}>
          <Description>{t("courses.xss.keylogger")}</Description>
        </Item>
        <Item style={{ left: "15%", bottom: "20%" }}>
          <Description>{t("courses.xss.phisihing")}</Description>
        </Item>
        <Item style={{ right: "15%", bottom: "50%" }}>
          <Description>{t("courses.xss.spoofing")}</Description>
        </Item>
        <Item style={{ right: "15%", top: "25%" }}>
          <Description>{t("courses.xss.cryptoMining")}</Description>
        </Item>
        <Item style={{ left: "14%", bottom: "35%" }}>
          <Description>{t("courses.xss.usingMicrophone")}</Description>
        </Item>
        <Item style={{ right: "15%", bottom: "25%" }}>
          <Description>{t("courses.xss.infectionAds")}</Description>
        </Item>
        <Item style={{ right: "25%", bottom: "10%" }}>
          <Description>{t("courses.xss.downloadingViruses")}</Description>
        </Item>
    </Container>
  );
};

export default XssConsequences;
