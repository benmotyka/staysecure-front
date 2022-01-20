import {
  ContainerOneItem,
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
const RansomwareDownload = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const [showDownloadBar, setShowDownloadBar] = useState(false);
  return (
    <ContainerOneItem>
      <WrapperOneItem>
        <Browser urlValue="https://skrzynka-pocztowa.pl/mail=539108">
          <MailPageSidebar>
            <Mail />
            <MailPageHeader>Skrzynka pocztowa</MailPageHeader>
          </MailPageSidebar>
          <MailContainer>
            <MailWrapper>
              <MailHeaderContainer>
                <MailDetail>
                  <strong>Od:</strong> bank@zauf4ny.pl
                </MailDetail>
                <MailDetail>
                  <strong>Tytuł:</strong> PILNE: Nieuregulowany rachunek
                </MailDetail>
                <MailDetail>
                  <strong>Data:</strong> 14.12.2021 22:54
                </MailDetail>
              </MailHeaderContainer>
              <MailBody>
                <MailText>
                  Szanowny kliencie,
                  <br />
                  <br />
                  Zwracamy się z uprzejmą prośbą o uregulowanie rachunku z dnia
                  14.12.2021. Ostateczny termin do zapłaty to{" "}
                  <strong>31.12.2021</strong>.<br />
                  <br /> Jeśli płatność nie zostanie uregulowana konto zostanie
                  obciążone kwotą 2000 PLN.
                  <br />
                  <br />
                  Zaufany Bank
                  <br />
                  <br />
                  <strong>Załączniki:</strong>
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
                    <Header>rachunek.exe</Header>
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
                <Header>rachunek.exe</Header>
                <Description>https://skrzynka-pocz...</Description>
              </DownloadItemWrapper>
            </DownloadItem>
          </DownloadContainer>
        </Browser>
      </WrapperOneItem>
    </ContainerOneItem>
  );
};

export default RansomwareDownload;
