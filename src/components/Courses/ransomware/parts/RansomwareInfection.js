import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";

import {Container, HeaderWrapper, Button, ContentWrapper, ContentHeader, ContentBody, BadUser, Victim, Arrow, RelativeContainer, Laptop, BadMail, App} from "../styles.js"
import { useTranslation } from "react-i18next";

const RansomwareInfection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
        {t('courses.ransomware.remoteAccessHeader')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t('courses.ransomware.phishingMailsHeader')}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
        {t('courses.ransomware.rceHeader')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.ransomware.remoteAccessDescription')}
          <Line />
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <Laptop/>
            <Victim/>
          </ContentBody>
        </ContentWrapper>
      )}
      {activeSlide === 1 && <ContentWrapper>
          <ContentHeader>
          {t('courses.ransomware.phishingMailsDescription')}
          <Line />
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <BadMail/>
            <RelativeContainer>
            <Arrow rotate={45} absolute style={{top: "31px", left: "-9px"}}/>
            <Arrow absolute/>
            <Arrow rotate={-45} absolute style={{top: "-31px", left: "-9px"}}/>
            </RelativeContainer>
            <RelativeContainer>
            <Victim small absolute style={{top: "100px", right: "20px"}}/>
            <Victim small absolute style={{top: "20px", right: "20px"}}/>
            <Victim small absolute style={{top: "-70px", right: "20px"}}/>
            </RelativeContainer>
          </ContentBody>
          </ContentWrapper>}{" "}
      {activeSlide === 2 && <ContentWrapper>
        <ContentHeader>
        {t('courses.ransomware.rceDescription')}
          <Line />
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <App/>
          </ContentBody>
          </ContentWrapper>}
    </Container>
  );
};

export default RansomwareInfection;
