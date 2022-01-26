import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  FlexCenterWrapper,
} from "../../ransomware/styles.js";

import { AiFillWarning as WarningIcon } from "react-icons/ai";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {MdError as SpamBlockIcon,
  MdOutlinePassword as PasswordIcon,
  MdMessage as MessageIcon,
  MdPolicy as PolicyIcon
} from "react-icons/md"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"

import {
  FaUser as UserIcon,
  FaLock as LockIcon
} from "react-icons/fa";
import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

const Warning = styled(WarningIcon)`
font-size: 60px;
color: ${colors.orange};
position: absolute;
left: 65%;
top: 35px;
`;

const User = styled(UserIcon)`
font-size: 150px;
color: ${colors.white};

`

const Laptop = styled(LaptopIcon)`
font-size: 150px;
color: ${colors.white};
`

const SpamBlock = styled(SpamBlockIcon)`
font-size: 40px;
position: absolute;
color: ${colors.red};
top: 20%;
right: 19%;
`

const Message = styled(MessageIcon)`
color: ${colors.white};
font-size: 50px;
position: absolute;
left: 34%;
z-index: -1;
top: 30%;
`

const Password = styled(PasswordIcon)`
color: ${colors.white};
font-size: 100px;
`

const Arrow = styled(ArrowIcon)`
color: ${colors.white};
font-size: 60px;
margin: 0 30px;
`

const Image = styled.img`
width: 100px;
`

const Policy = styled(PolicyIcon)`
font-size: 90px;
position: absolute;
right: -10px;
top: 40%;
color: ${colors.orange};
`

const Lock = styled(LockIcon)`
font-size: 120px;
color: ${colors.white};
`

const PhishingProtection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
      <HeaderWrapper columns={4}>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
        {t('courses.phishing.twoFa')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t('courses.phishing.spamFilters')}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
        {t('courses.phishing.passwordPolicies')}
        </Button>
        <Button active={activeSlide === 3} onClick={() => setActiveSlide(3)}>
        {t('courses.phishing.attention')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.phishing.twoFaDescription')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Password/>
              <Arrow/>
              <Image src="courses/2fa.png"/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.phishing.spamFilterDescription1')}
            <br />
            <br />
            {t('courses.phishing.spamFilterDescription2')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Laptop/>
              <SpamBlock/>
              <Message/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.phishing.passwordPolicyDescription1')}
            <br />
            <br /> 
            {t('courses.phishing.passwordPolicyDescription2')}
            <strong>
            {t('courses.phishing.passwordPolicyDescription3')}
            </strong>{" "}
            {t('courses.phishing.passwordPolicyDescription4')}
            <br />
            <br /> 
            {t('courses.phishing.passwordPolicyDescription5')}
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
      {activeSlide === 3 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.phishing.attentionDescription1')}
            <br />
            <br />
            {t('courses.phishing.attentionDescription2')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Warning/>
              <User/>
              <Laptop/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default PhishingProtection;
