import { useTranslation } from "react-i18next";
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
  const {t} = useTranslation()

  const [showRansomDocument, setShowRansomDocument] = useState(false);


  const newDate = new Date();
  return (
    <DesktopContainer
      backgroundUrl={process.env.PUBLIC_URL + "/desktop/wallpaper.jpg"}
    >
      <BasicIcons>
        <Icon>
          <IconImage src="desktop/my_computer.ico" />
          <IconText>{t('courses.ransomware.file1')}</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/folder.ico" />
          <IconText>{t('courses.ransomware.file2')}</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/image.ico" />
          <IconText>{t('courses.ransomware.file3')}</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/textfile.ico" />
          <IconText>{t('courses.ransomware.file4')}</IconText>
        </Icon>
        <Icon>
          <IconImage src="desktop/wordpad.ico" />
          <IconText>{t('courses.ransomware.file5')}</IconText>
        </Icon>
        <Icon onClick={() => {
          setShowRansomDocument(true)
          props.setWaitForCorrectAnswer(false)
        }
        }>
          <IconImage src="desktop/exe.ico" />
          <IconText>{t('courses.ransomware.file6')}</IconText>
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
            <WindowDescription>{t('courses.ransomware.receipt')}</WindowDescription>
            <Close onClick={() => setShowRansomDocument(false)} />
          </WindowHeader>
          <DocumentContainer>
            <DocumentItemWrapper>
              <Bank /> <DocumentHeader>{t('courses.ransomware.trustedBank')}</DocumentHeader>
            </DocumentItemWrapper>
            <h4>{t('courses.ransomware.ransomFilePart1')}</h4>
            <p>{t('courses.ransomware.ransomFilePart2')}: 123456789011121314</p>
            <p>{t('courses.ransomware.ransomFilePart3')}</p>
            <p>{t('courses.ransomware.ransomFilePart4')}</p>
            <h4>{t('courses.ransomware.ransomFilePart5')}</h4>
            <p>{t('courses.ransomware.ransomFilePart6')}: -10.53 PLN</p>
            <p>{t('courses.ransomware.ransomFilePart7')}: -10.53 PLN</p>
            <p>{t('courses.ransomware.ransomFilePart8')}:              {newDate.getDate()}/{newDate.getMonth() + 1}/
              {newDate.getFullYear()}</p>
          </DocumentContainer>
        </WindowContainer>
      )}
    </DesktopContainer>
  );
};

export default DownloadedRansomwareDesktop;
