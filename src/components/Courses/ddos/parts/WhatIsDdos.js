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
import { useTranslation } from "react-i18next";


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
`

const Server = styled(ServerIcon)`
font-size: 60px;
color: ${colors.white};
`

// @TODO needs hard refactor 

const WhatIsDdos = () => {
  const {t} = useTranslation()

  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper columns={2}>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
        {t('courses.dos.usualCircumstances')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t('courses.dos.dosAttack')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
        {t('courses.dos.usualCircumstancesDescription1')}
            <br/><br/>
        {t('courses.dos.usualCircumstancesDescription2')}
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
          {t('courses.dos.dosAttackDescription')}
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
                <User bad style={{right: "35%", top: "27%"}}/>
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
