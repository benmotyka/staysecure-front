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
  DownloadContainerHeader
} from "../styles.js";
import Browser from "components/Courses/Browser/Browser.js";
import { useState } from "react";
import { useEffect } from "react";
const RansomwareDownload = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const [showDownloadBar, setShowDownloadBar] = useState(false);

  return (
    <ContainerOneItem>
      <WrapperOneItem>
        <Browser>
          <MailPageSidebar>
            <Mail />
            <MailPageHeader>Skrzynka pocztowa</MailPageHeader>
          </MailPageSidebar>
          <MailContainer>
            <MailWrapper>
              <MailHeaderContainer>
                <MailDetail><strong>Od:</strong> bank@peka0.pl</MailDetail>
                <MailDetail><strong>Tytuł:</strong> PILNE: Nieuregulowany rachunek</MailDetail>
                <MailDetail><strong>Data:</strong> 14.12.2021 22:54</MailDetail>
              </MailHeaderContainer>
              <MailBody>
                <MailText>Szanowny kliencie,<br/><br/>Zwracamy się z uprzejmą prośbą o uregulowanie rachunku z dnia 14.12.2021. Ostateczny termin do zapłaty to <strong>31.12.2021</strong>.<br/><br/> Jeśli płatność nie zostanie uregulowana konto zostanie obciążone kwotą 2000 PLN.<br/><br/>Bank Pekao SA<br/><br/><strong>Załączniki:</strong>
                </MailText>
                <DownloadItem active={true} onClick={() => setShowDownloadBar(true)}>
              <DownloadItemWrapper>
                <File />
              </DownloadItemWrapper>{" "}
              <DownloadItemWrapper>
                <Header>rachunek</Header>
              </DownloadItemWrapper>
            </DownloadItem>
              </MailBody>
            </MailWrapper>
          </MailContainer>
          <DownloadContainer active={showDownloadBar}>
             <DownloadContainerHeader> Pobrane pliki: </DownloadContainerHeader> 
            <DownloadItem  active={showDownloadBar} onClick={() => {
              if(showDownloadBar) props.setWaitForCorrectAnswer(false)}
              }>
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
