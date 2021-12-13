import { ContainerOneItem, WrapperOneItem, DownloadContainer, DownloadItem, File, Header, Description, DownloadItemWrapper } from "../styles.js";
import Browser from "components/Courses/Browser/Browser.js";
import { useState } from "react";
import { useEffect } from "react";
const RansomwareDownload = (props) => {
    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
      }, []);
    const [showDownloadBar, setShowDownloadBar] = useState(false)

  return (
    <ContainerOneItem>
      <WrapperOneItem>
        <Browser>
        <div><div onClick={() => setShowDownloadBar(true)}>Kliknij tutaj</div></div>
        <DownloadContainer showDownloadBar={showDownloadBar}>
            <DownloadItem onClick={() => props.setWaitForCorrectAnswer(false)}><DownloadItemWrapper><File/></DownloadItemWrapper> <DownloadItemWrapper>
                <Header>Plik.exe</Header>
                <Description>https://gmail.com/251...</Description>
                </DownloadItemWrapper></DownloadItem>
        </DownloadContainer>
        </Browser>
      </WrapperOneItem>
    </ContainerOneItem>
  );
};

export default RansomwareDownload;
