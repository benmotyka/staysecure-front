import styled from "styled-components";
import colors from "constans/colors";

import { RiParentFill as ParentIcon } from "react-icons/ri";
import { FiActivity as ActivityIcon } from "react-icons/fi";
import { HiOutlineArrowNarrowDown as ArrowIcon } from "react-icons/hi";
import {GiEvilHand as EvilIcon} from "react-icons/gi"

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Parent = styled(ParentIcon)`
  font-size: 50px;
  color: ${colors.orange};
`;

const Activity = styled(ActivityIcon)`
  font-size: 50px;
  color: ${colors.orange};
`;

const Evil = styled(EvilIcon)`
font-size: 50px;
color: red;
`


export const Header = styled.h4`
  font-size: 34px;
  color: ${colors.orange};
  margin: 0;
`;

export const Arrow = styled(ArrowIcon)`
  font-size: 50px;
  color: ${colors.white};
  position: absolute;
`;

const ItemDescription = styled.h3`
  font-size: 18px;
  color: ${colors.white};
  margin: 10px 0 0 0;
  color: ${props => props.bad ? colors.red : colors.white};

`;

const WhatIsKeylogger = () => {
  return (
    <RelativeContainer>
      <Header>Keylogger</Header>
      <AbsoluteContainer style={{ top: "15%" }}>
      <Activity/>
        <ItemDescription>Badanie aktywności pracowników</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ top: "68%", left: "22%" }}>
        <Parent/>
        <ItemDescription>Kontrola rodzicielska</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ top: "68%", left: "63%" }}>
          <Evil/>
        <ItemDescription bad>Wykradnięcie danych</ItemDescription>
      </AbsoluteContainer>
      <Arrow style={{ top: "35%", transform: "rotate(180deg)" }} />
      <Arrow style={{ top: "55%", left: "36%", transform: "rotate(45deg)" }} />
      <Arrow style={{ top: "55%", left: "60%", transform: "rotate(315deg)" }} />
    </RelativeContainer>
  );
};

export default WhatIsKeylogger;
