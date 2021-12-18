import { useState } from "react";
import {
    DesktopContainer,
    TaskBar,
    Windows,
    IconGroup,
    TaskBarImage,
    TaskBarIcon,
    DateContainer,
    DateItem,
    BasicIcons,
    Icon,
    IconImage,
    IconText,
    ChildContainer,
    RansomwareContainer,
    Lock,
    RansomwareWarning,
    RansomwareWrapper,
    RansomwareDescription,
    RansomwareBody,
    RansomwareHeader,
    WindowContainer,
    WindowHeader,
    Close
  } from "./Desktop.styles.js";
  
  const EncryptedRansomwareDesktop = (props) => {
    const [showRansomPopup, setShowRansomPopup] = useState(false)
    const newDate = new Date();
    const ransomwareDate =  new Date(new Date().getTime()+(5*24*60*60*1000));

    return (
      <DesktopContainer
        backgroundUrl={process.env.PUBLIC_URL + "/windws_10_wallpaper.jpg"}
      >
        <BasicIcons>
          <Icon>
            <IconImage src="desktop/my_computer.ico" />
            <IconText>Mój komputer</IconText>
          </Icon>
          <Icon>
            <IconImage src="desktop/file.ico" />
            <IconText>eg0p3v.cp8s10</IconText>
          </Icon>
          <Icon>
            <IconImage src="desktop/file.ico" />
            <IconText>davs1.80r809</IconText>
          </Icon>
          <Icon>
            <IconImage src="desktop/file.ico" />
            <IconText>abp437.v01b9</IconText>
          </Icon>
          <Icon>
            <IconImage src="desktop/file.ico" />
            <IconText>v9anvr.31vbbs</IconText>
          </Icon>
          <Icon>
            <IconImage src="desktop/exe.ico" />
            <IconText>Rachunek.exe</IconText>
          </Icon>
          <Icon onClick={() => setShowRansomPopup(true)}>
            <IconImage src="desktop/exe.ico" />
            <IconText>CLICK ME.exe</IconText>
          </Icon>
        </BasicIcons>
        <ChildContainer>{props.children}</ChildContainer>
        <TaskBar>
          <IconGroup>
            <TaskBarIcon>
              <Windows />
            </TaskBarIcon>
            <TaskBarIcon>
              <TaskBarImage src="desktop/file_explorer.ico" />
            </TaskBarIcon>
          </IconGroup>
          <TaskBarIcon>
            <DateContainer>
              <DateItem>
                {newDate.getHours()}:
                {(newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes()}
              </DateItem>
              <DateItem>
                {newDate.getDate()}/{newDate.getMonth() + 1}/
                {newDate.getFullYear()}
              </DateItem>
            </DateContainer>
          </TaskBarIcon>
        </TaskBar>
        {showRansomPopup && 
        <WindowContainer>
            <WindowHeader><RansomwareDescription>Ransomware</RansomwareDescription><Close onClick={() => setShowRansomPopup(false)}/></WindowHeader>
        <RansomwareContainer>
            <RansomwareWrapper>
                <Lock/>
            <RansomwareWarning>
                Klucz prywatny zostanie zniszczony: <br/><br/>{ransomwareDate.toDateString()} <br/> {ransomwareDate.getHours()}:{(ransomwareDate.getMinutes() < 10 ? "0" : "") + ransomwareDate.getMinutes()}
                </RansomwareWarning>
            </RansomwareWrapper>
            <RansomwareWrapper>
                <RansomwareHeader>Twoje dane zostały zaszyfrowane!</RansomwareHeader>
                <RansomwareBody><RansomwareDescription>Wszystkie pliki na tym urządzeniu zostały zaszyfrowane z użyciem unikalnego klucza publicznego RSA-2048, wygenerowanego unikalnie dla tego urządzenia. Aby odszyfrować wszystkie swoje pliki, potrzebujesz <strong>klucza prywatnego</strong>.<br/><br/>Aby uzyskać dostęp do klucza, musisz zapłacić okup 1000 EUR na podany adres Bitcoin:<br/><br/>bc1qj7a5w8myrljmqjg2kxha8xu8kfwtka9evvlall<br/><br/>Jeśli to zrobisz w wyznaczonym czasie, otrzymasz klucz. W przeciwnym razie klucz zostanie usunięty, a twoje dane <strong>nie będą możliwe do odzyskania.</strong>
                    </RansomwareDescription></RansomwareBody>
            </RansomwareWrapper>
            </RansomwareContainer>
            </WindowContainer>
        }
      </DesktopContainer>
    );
  };
  
  export default EncryptedRansomwareDesktop;
  