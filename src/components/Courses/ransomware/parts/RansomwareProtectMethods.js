import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  Victim,
  Laptop,
  Trust,
  FlexCenterWrapper,
  Backup,
  Antivirus,
} from "../styles.js";

const RansomwareProtectMethods = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
        {t('courses.ransomware.principleTrustHeader')}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t('courses.ransomware.backupHeader')}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
        {t('courses.ransomware.antivirusUpdatesHeader')}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.ransomware.principleTrustDescription')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Trust
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.ransomware.backupDescription1')}
            <br />
            <br />
            {t('courses.ransomware.backupDescription2')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Backup
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          {t('courses.ransomware.antivirusUpdatesDescription1')}
            <br />
            <br />
            {t('courses.ransomware.antivirusUpdatesDescription2')}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Antivirus
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default RansomwareProtectMethods;
