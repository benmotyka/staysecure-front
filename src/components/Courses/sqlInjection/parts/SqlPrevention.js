import styled from "styled-components";
import colors from "constans/colors.js";

import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";
import { AiFillWarning as WarningIcon } from "react-icons/ai";
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
import {
  BsShieldFillCheck as CheckIcon,
  BsLaptop as LaptopIcon,
} from "react-icons/bs";
import {
  FaRegFileCode as EncodeIcon,
  FaServer as ServerIcon,
} from "react-icons/fa";

const RelativeContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Encode = styled(EncodeIcon)`
  font-size: 120px;
  color: ${colors.white};
  position: absolute;
  top: -10px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Check = styled(CheckIcon)`
  font-size: 60px;
  color: ${colors.lightGreen};
  position: absolute;
  right: -25px;
  top: -30px;
`;

const Server = styled(ServerIcon)`
  font-size: 120px;
  color: ${colors.white};
`;

const CodeText = styled.samp`
  font-size: 18px;
  color: ${colors.white};
`;

const LaptopCodeText = styled.samp`
  font-size: 13px;
  color: ${colors.orange};
  position: absolute;
  bottom: 55px;
`;

const Laptop = styled(LaptopIcon)`
  font-size: 150px;
  color: ${colors.white};
`;

const Warning = styled(WarningIcon)`
  font-size: 50px;
  color: ${colors.orange};
  position: absolute;
  top: 30px;
`;

const SqlPrevention = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          {t('courses.sql.sqlPreventionHeader1')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t('courses.sql.sqlPreventionHeader2')}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
        {t('courses.sql.sqlPreventionHeader3')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.sql.sqlPreventionAnswer1')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <RelativeContainer>
                <Encode />
                <Check />
              </RelativeContainer>
              <Arrow />
              <Server />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.sql.sqlPreventionAnswer2')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <CodeText>
                const clientName = req.body.name
                <br />
                <br />
                const sql = "SELECT * FROM clients WHERE name = $1"
                <br />
                <br />
                const values = [clientName]
                <br />
                <br />
                const result = await db.query(sql, values)
                <br />
                <br />
              </CodeText>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.sql.sqlPreventionAnswer3')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Warning />
              <Laptop />
              <LaptopCodeText>ACCESS DENIED</LaptopCodeText>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default SqlPrevention;
