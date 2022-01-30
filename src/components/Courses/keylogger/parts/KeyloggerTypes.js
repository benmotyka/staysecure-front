import styled from "styled-components";
import colors from "constans/colors";
import { useTranslation } from "react-i18next";

import { GiUsbKey as UsbIcon } from "react-icons/gi";
import { MdSettingsApplications as AppIcon } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 49% 2% 49%;
  grid-template-rows: 1fr;
  padding: 25px 0;
`;

export const VerticalLine = styled.hr`
  width: 0;
  height: 100%;
  opacity: 10%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const Header = styled.h4`
  color: ${colors.orange};
  font-size: 25px;
  margin-bottom: 0;
`;

export const Usb = styled(UsbIcon)`
  font-size: 100px;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const App = styled(AppIcon)`
  font-size: 100px;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.white};
  margin: 5px auto 5px 40px;
  opacity: 0.8;
`;

const KeyloggerTypes = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <BodyWrapper>
        <ContentWrapper>
          <Header>{t('courses.keylogger.hardware')}</Header>
          <Usb />
          <Description>- {t('courses.keylogger.hardwareDescription1')}</Description>
          <Description>- {t('courses.keylogger.hardwareDescription2')}</Description>
          <Description>
            - {t('courses.keylogger.hardwareDescription3')}
          </Description>
          <Description>
              - {t('courses.keylogger.hardwareDescription4')}
          </Description>
        </ContentWrapper>
        <VerticalLine />
        <ContentWrapper>
          <Header>{t('courses.keylogger.software')}</Header>
          <App />
          <Description>- {t('courses.keylogger.softwareDescription1')}</Description>
          <Description>- {t('courses.keylogger.softwareDescription2')}</Description>
          <Description>
            - {t('courses.keylogger.softwareDescription3')}
          </Description>
          <Description>
              - {t('courses.keylogger.softwareDescription4')}
          </Description>
        </ContentWrapper>
      </BodyWrapper>
    </Container>
  );
};

export default KeyloggerTypes;
