import styled from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

import { HiOutlineArrowNarrowDown as ArrowIcon } from "react-icons/hi";

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${colors.white};
  position: absolute;
  width: 350px;
  opacity: 0.8;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: ${colors.orange};
  position: absolute;
  left: 45%;
  top: 40%;
`;

const Arrow = styled(ArrowIcon)`
  font-size: 50px;
  color: ${colors.white};
  position: absolute;
`;

const XssWhatIs = () => {
  const { t } = useTranslation();

  return (
    <RelativeContainer>
      <Header>{t("courses.xss.xssAttack")}</Header>
      <Description style={{ top: "20%", left: "17%" }}>
        {t("courses.xss.whatIs1")}
      </Description>
      <Description style={{ top: "28%", right: "5%" }}>
        {t("courses.xss.whatIs2")}
      </Description>
      <Description style={{ bottom: "25%", right: "0" }}>
        {t("courses.xss.whatIs3")}
      </Description>
      <Description style={{ bottom: "19%", left: "15%" }}>
        {t("courses.xss.whatIs4")}
      </Description>
      <Arrow style={{ top: "37%", left: "39%", transform: "rotate(145deg)" }} />
      <Arrow
        style={{ top: "38%", right: "33%", transform: "rotate(225deg)" }}
      />
      <Arrow
        style={{ bottom: "37%", left: "40%", transform: "rotate(35deg)" }}
      />
      <Arrow
        style={{ bottom: "39%", right: "33%", transform: "rotate(-40deg)" }}
      />
    </RelativeContainer>
  );
};

export default XssWhatIs;
