import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";
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

import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {SiAdblock as AntivirusIcon} from "react-icons/si"
import {
  MdOutlinePassword as PasswordIcon,
  MdPolicy as PolicyIcon,
} from "react-icons/md";
import { IoIosArrowForward as ArrowIcon } from "react-icons/io";

import {FaLock as LockIcon } from "react-icons/fa";
import styled from "styled-components";
import colors from "constans/colors.js";


const Laptop = styled(LaptopIcon)`
  font-size: 150px;
  color: ${colors.white};
`;

const Password = styled(PasswordIcon)`
  color: ${colors.white};
  font-size: 100px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Image = styled.img`
  width: 100px;
`;

const Policy = styled(PolicyIcon)`
  font-size: 90px;
  position: absolute;
  right: -10px;
  top: 40%;
  color: ${colors.orange};
`;

const Antivirus = styled(AntivirusIcon)`
  font-size: 60px;
  color: ${colors.red};
`;

const Lock = styled(LockIcon)`
font-size: 120px;
color: ${colors.white};
`


const KeyloggerProtectionMethods = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t} = useTranslation()
  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          {t('courses.keylogger.protectionHeader1')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          {t('courses.keylogger.protectionHeader2')}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          {t('courses.keylogger.protectionHeader3')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.keylogger.protectionDescription1a')}
            <br />
            <br />
            {t('courses.keylogger.protectionDescription1b')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
            <Policy/>
              <Lock/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.keylogger.protectionDescription2a')}
            <br />
            <br />
            {t('courses.keylogger.protectionDescription2b')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Password />
              <Arrow />
              <Image src="courses/2fa.png" />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.keylogger.protectionDescription3')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
          <ContentBody>
              <Antivirus
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default KeyloggerProtectionMethods;
