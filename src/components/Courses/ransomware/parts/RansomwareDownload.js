import {
  Container,
  WrapperOneItem,
  DownloadContainer,
  DownloadItem,
  File,
  Header,
  Description,
  DownloadItemWrapper,
  MailPageSidebar,
  Mail,
  MailPageHeader,
  MailContainer,
  MailHeaderContainer,
  MailDetail,
  MailWrapper,
  MailBody,
  MailText,
} from "../styles.js";
import Browser from "components/Browser/Browser.js";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const RansomwareDownload = (props) => {
  const {t} = useTranslation()

  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const [showDownloadBar, setShowDownloadBar] = useState(false);
  return (
    <Container>
      <WrapperOneItem>
        <Browser urlValue="https://skrzynka-pocztowa.pl/mail=539108">
          <MailPageSidebar>
            <Mail />
            <MailPageHeader>{t('courses.ransomware.mailbox')}</MailPageHeader>
          </MailPageSidebar>
          <MailContainer>
            <MailWrapper>
              <MailHeaderContainer>
                <MailDetail>
                  <strong>{t('courses.ransomware.from')}:</strong> {t('courses.ransomware.bankName')}
                </MailDetail>
                <MailDetail>
                  <strong>{t('courses.ransomware.title')}:</strong> {t('courses.ransomware.titleContent')}
                </MailDetail>
                <MailDetail>
                  <strong>{t('courses.ransomware.date')}:</strong> 14.12.2021 22:54
                </MailDetail>
              </MailHeaderContainer>
              <MailBody>
                <MailText>
                {t('courses.ransomware.mailPart1')}
                  <br />
                  <br />
                  {t('courses.ransomware.mailPart2')}
                  <strong>31.12.2021</strong>.<br />
                  <br /> 
                  {t('courses.ransomware.mailPart3')}
                  <br />
                  <br />
                  {t('courses.ransomware.mailPart4')}
                  <br />
                  <br />
                  <strong>
                  {t('courses.ransomware.mailPart5')}:</strong>
                </MailText>
                <DownloadItem
                  active={true}
                  onClick={() => {
                    setShowDownloadBar(true);
                    props.setWaitForCorrectAnswer(false);
                  }}
                >
                  <DownloadItemWrapper>
                    <File />
                  </DownloadItemWrapper>{" "}
                  <DownloadItemWrapper>
                    <Header>{t('courses.ransomware.program')}</Header>
                  </DownloadItemWrapper>
                </DownloadItem>
              </MailBody>
            </MailWrapper>
          </MailContainer>
          <DownloadContainer active={showDownloadBar}>
            <DownloadItem
              active={showDownloadBar}
              // onClick={() => {if(showDownloadBar) setShowRunFile(true)}}
            >
              <DownloadItemWrapper>
                <File />
              </DownloadItemWrapper>{" "}
              <DownloadItemWrapper>
                <Header>{t('courses.ransomware.program')}</Header>
                <Description>https://skrzynka-pocz...</Description>
              </DownloadItemWrapper>
            </DownloadItem>
          </DownloadContainer>
        </Browser>
        </WrapperOneItem>
    </Container>
  );
};

export default RansomwareDownload;
