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
  DocumentContainer,
  Bank,
  DocumentItemWrapper,
  WindowDescription,
  DocumentHeader,
  WindowContainer,
  WindowHeader,
  Close,
} from "./Desktop.styles.js";

const DownloadedRansomwareDesktop = (props) => {
  const [showRansomDocument, setShowRansomDocument] = useState(false);


  const newDate = new Date();
  return (
    <DesktopContainer
      backgroundUrl={process.env.PUBLIC_URL + "/desktop/wallpaper.jpg"}
    >
      <BasicIcons>
        <Icon>
          <IconImage src="desktop/my_computer.ico" />
          <IconText>Mój komputer</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/folder.ico" />
          <IconText>Ważne pliki</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/image.ico" />
          <IconText>Zdjęcie.jpg</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/textfile.ico" />
          <IconText>Notatki.txt</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/wordpad.ico" />
          <IconText>Finsanse.docx</IconText>
        </Icon>
        <Icon onClick={() => {
          setShowRansomDocument(true)
          props.setWaitForCorrectAnswer(false)
        }
        }>
          <IconImage src="desktop/exe.ico" />
          <IconText>Rachunek.exe</IconText>
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
      {showRansomDocument && (
        <WindowContainer>
          <WindowHeader>
            <WindowDescription>Rachunek</WindowDescription>
            <Close onClick={() => setShowRansomDocument(false)} />
          </WindowHeader>
          <DocumentContainer>
            <DocumentItemWrapper>
              <Bank /> <DocumentHeader>Zaufany Bank</DocumentHeader>
            </DocumentItemWrapper>
            <h4>RACHUNEK WINIEN (NADAWCA): JAN KOWALSKI</h4>
            <p>Numer rachunku: 123456789011121314</p>
            <p>Nazwa banku: Zaufany Bank</p>
            <p>Właściciel: JAN KOWALSKI</p>
            <h4>SZCZEGÓŁY OPERACJI</h4>
            <p>Kwota operacji: -10.53 PLN</p>
            <p>Kwota obciążenia: -10.53 PLN</p>
            <p>Data księgowania:              {newDate.getDate()}/{newDate.getMonth() + 1}/
              {newDate.getFullYear()}</p>
          </DocumentContainer>
        </WindowContainer>
      )}
    </DesktopContainer>
  );
};

export default DownloadedRansomwareDesktop;
