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
  DownloadContainerHeader,
  RunFileContainer,
  RunFileWrapper,
  RunFileButton,
  ButtonsContainer
} from "../styles.js";
import Browser from "components/Browser/Browser.js";
import { useState } from "react";
import { useEffect } from "react";
import Desktop from "components/Desktop/Desktop.js";
const RansomwareDownload = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const [showDownloadBar, setShowDownloadBar] = useState(false);
  const [showRunFile, setShowRunFile] = useState(false)
  return (
    <ContainerOneItem>
      <WrapperOneItem>
        {/* <Desktop> */}
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
                <DownloadItem active={true} onClick={() => 
                {
                  setShowDownloadBar(true)
                  props.setWaitForCorrectAnswer(false)
                }
                }>
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
             <DownloadContainerHeader> Pobrane pliki: </DownloadContainerHeader> 
            <DownloadItem  active={showDownloadBar} 
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
          {/* <RunFileContainer active={showRunFile}>
              <RunFileWrapper>
                <Header>Czy chcesz uruchomić program rachunek.exe jako administrator?</Header>
                <ButtonsContainer>
                <RunFileButton active={showRunFile} onClick={() => {
              if(showRunFile) {
                props.setWaitForCorrectAnswer(false)
                setShowRunFile(false)   
              } }
              }>Tak</RunFileButton>
                <RunFileButton active={showRunFile} onClick={() => {
              if(showRunFile) setShowRunFile(false)}
              }>Nie</RunFileButton>
                </ButtonsContainer>
              </RunFileWrapper>
          </RunFileContainer> */}
        </Browser>
        {/* </Desktop> */}
      </WrapperOneItem>
    </ContainerOneItem>
  );
};

export default RansomwareDownload;
