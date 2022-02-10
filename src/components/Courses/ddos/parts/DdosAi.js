import styled from "styled-components";
import colors from "constans/colors";

import {
  AiOutlinePartition as AiIcon,
  AiFillWarning as WarningIcon,
} from "react-icons/ai";
import { FaUser as UserIcon, FaServer as ServerIcon } from "react-icons/fa";
import { HiOutlineArrowNarrowDown as ArrowIcon } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 25px;
  box-sizing: border-box;
`;

const Ai = styled(AiIcon)`
  font-size: 100px;
  color: ${colors.white};
`;

const Server = styled(ServerIcon)`
  font-size: 80px;
  color: ${colors.white};
  margin-top: 25px;
`;

const Arrow = styled(ArrowIcon)`
  font-size: 50px;
  position: absolute;
  color: ${(props) => (props.bad ? colors.red : colors.hoverLightGreen)};
  transform: ${(props) => (props.rotate ? `rotate(${props.rotate}deg)` : "")};
  left: ${(props) => (props.x ? props.x : "")};
  bottom: ${(props) => (props.y ? props.y : "")};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.noAlignCenter ? "" : "center")};
  justify-content: center;
  position: relative;
  border: 1px solid ${colors.darkestPurple};
`;

const User = styled(UserIcon)`
  font-size: 45px;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
  position: absolute;
  left: ${(props) => (props.x ? props.x : "")};
  bottom: ${(props) => (props.y ? props.y : "")};
`;

const WrapperDescription = styled.p`
  position: absolute;
  color: ${colors.white};
  opacity: 0.8;
  font-size: 16px;
  top: 10px;
  left: 10px;
  margin: 0;
  max-width: 30%;
`;

const Warning = styled(WarningIcon)`
  font-size: 40px;
  color: ${colors.orange};
  position: absolute;
  left: ${(props) => (props.x ? props.x : "")};
  bottom: ${(props) => (props.y ? props.y : "")};
`;

const DdosAi = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <WrapperDescription>
          {t("courses.dos.aiDescription1a")}

          <strong>{t("courses.dos.botnet")}</strong>
          {t("courses.dos.aiDescription1b")}
        </WrapperDescription>
        <User x={"30%"} y={"10px"} />
        <User x={"40%"} y={"10px"} />
        <User x={"50%"} y={"10px"} />
        <User bad x={"60%"} y={"10px"} />
        <User bad x={"70%"} y={"10px"} />
      </Wrapper>
      <Wrapper>
        <WrapperDescription>
          {t("courses.dos.aiDescription2")}
        </WrapperDescription>
        <Arrow rotate={-45} x={"33%"} y={"75%"} />
        <Arrow rotate={-25} x={"41%"} y={"75%"} />
        <Arrow x={"50%"} y={"75%"} />
        <Arrow bad rotate={25} x={"59%"} y={"75%"} />
        <Warning x={"57%"} y={"63%"} />
        <Arrow bad rotate={45} x={"67%"} y={"75%"} />
        <Warning x={"65%"} y={"63%"} />
        <Ai />
        <Arrow x={"50%"} y={"10px"} />
        <Arrow x={"47.5%"} y={"10px"} />
        <Arrow x={"45%"} y={"10px"} />
      </Wrapper>
      <Wrapper noAlignCenter>
        <WrapperDescription>
          {t("courses.dos.aiDescription3")}
        </WrapperDescription>
        <Server />
      </Wrapper>
    </Container>
  );
};

export default DdosAi;
