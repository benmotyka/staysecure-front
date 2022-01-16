import { useState } from "react";
import styled from "styled-components";
import colors from "constans/colors.js";
import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
} from "../../ransomware/styles.js";
import { AiFillWarning as WarningIcon } from "react-icons/ai";
import {HiOutlineArrowNarrowDown as ArrowIcon} from "react-icons/hi"
import {
    FaUser as UserIcon,
  FaServer as ServerIcon
} from "react-icons/fa";


const Warning = styled(WarningIcon)`
font-size: 40px;
color: ${colors.orange};
position: absolute;
`;

const User = styled(UserIcon)`
font-size: 45px;
color: ${props => props.bad ? colors.red : colors.white};
position: absolute;
`

const ContentRelativeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 100%;
height: 100%;
`

const Arrow = styled(ArrowIcon)`
font-size: 30px;
margin: 0 30px;
position: absolute;
color: ${props => props.bad ? colors.red : colors.white};
&:after {
    content: "error";
}
`

const Server = styled(ServerIcon)`
font-size: 60px;
color: ${colors.white};
`

const WhatIsDdos = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper columns={2}>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          Zwyczajne okoliczności
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          Atak DOS
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            W zwyczajnych okolicznościach serwer webowy przetwarza żądania dla naturalnego ruchu. Te czynności nie powinny przekraczać dostępnych zasobów serwera.<br/><br/>Poza swoim głównym zadaniem może również automatycznie wykonywać czynności administracyjne, takie jak na przykład wykonywanie kopii zapasowych danych.
            <Line />
          </ContentHeader>
          <ContentRelativeWrapper>
                <Server/>
                <Arrow style={{left: "38%", top: "35%", transform: "rotate(315deg)"}}/>
                <User style={{left: "34%", top: "25%"}}/>
                <Arrow style={{left: "38%", top: "61%", transform: "rotate(225deg)"}}/>
                <User style={{left: "34%", top: "65%"}}/>
          </ContentRelativeWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            Nadchodzący, nienaturalny ruch obciąża serwer do tego stopnia, że ten nie nadąża z odpowiadaniem na pozostałe, zwykłe żądania. Jednocześnie też brak mu zasobów na dokonywanie czynności administracyjnych.
            <Line />
          </ContentHeader>
            <ContentRelativeWrapper>
            <Server/>
                <Arrow style={{left: "38%", top: "35%", transform: "rotate(315deg)"}}/>
                <User style={{left: "34%", top: "25%"}}/>
                <Warning style={{left: "43%", top: "38%"}}/>
                <Arrow style={{left: "38%", top: "61%", transform: "rotate(225deg)"}}/>
                <User style={{left: "34%", top: "65%"}}/>
                <Warning style={{left: "44%", top: "55%"}}/>
                <User bad style={{right: "34%", top: "33%"}}/>
                <User bad style={{right: "39%", top: "25%"}}/>
                <User bad style={{right: "30%", top: "24%"}}/>
                <User bad style={{right: "34%", top: "21%"}}/>
                <User bad style={{right: "35%", top: "27%"}}/>
                <User bad style={{right: "29%", top: "33%"}}/>
                <Arrow bad style={{right: "39%", top: "41%", transform: "rotate(45deg)"}}/>
                <Arrow bad style={{right: "38%", top: "39%", transform: "rotate(45deg)"}}/>
                <Arrow bad style={{right: "37%", top: "40%", transform: "rotate(45deg)"}}/>
                <Arrow bad style={{right: "39%", top: "38%", transform: "rotate(45deg)"}}/>
                <Arrow bad style={{right: "40%", top: "38%", transform: "rotate(45deg)"}}/>
                <Arrow bad style={{right: "38%", top: "42%", transform: "rotate(45deg)"}}/>
            </ContentRelativeWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default WhatIsDdos;
