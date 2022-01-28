import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    WindowDescription,
    RansomwareBody,
    RansomwareHeader,
    WindowContainer,
    WindowHeader,
    DocumentContainer,
  Bank,
  DocumentItemWrapper,
  DocumentHeader,
    Close
  } from "./Desktop.styles.js";
  
  const EncryptedRansomwareDesktop = (props) => {
    const [showRansomPopup, setShowRansomPopup] = useState(false)
  const [showRansomDocument, setShowRansomDocument] = useState(false);
    const newDate = new Date();
    const ransomwareDate =  new Date(new Date().getTime()+(5*24*60*60*1000));
  const {t} = useTranslation()


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
          <Icon
          onClick={() => {
            setShowRansomDocument(true)
          }}
          >
            <IconImage src="desktop/exe.ico" />
            <IconText>{t('courses.ransomware.file6')}</IconText>
          </Icon>
          <Icon onClick={() => {
            props.setWaitForCorrectAnswer(false)
            setShowRansomPopup(true)
          }}>
            <IconImage src="desktop/exe.ico" />
            <IconText>{t('courses.ransomware.file7')}</IconText>
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
            <WindowHeader><WindowDescription>{t('courses.ransomware.ransomPopupHeader')}</WindowDescription><Close onClick={() => setShowRansomPopup(false)}/></WindowHeader>
        <RansomwareContainer>
            <RansomwareWrapper>
                <Lock/>
            <RansomwareWarning>
            {t('courses.ransomware.ransomPopupPart1')}: <br/><br/>{ransomwareDate.toDateString()} <br/> {ransomwareDate.getHours()}:{(ransomwareDate.getMinutes() < 10 ? "0" : "") + ransomwareDate.getMinutes()}
                </RansomwareWarning>
            </RansomwareWrapper>
            <RansomwareWrapper>
                <RansomwareHeader>{t('courses.ransomware.ransomPopupPart2')}</RansomwareHeader>
                <RansomwareBody><WindowDescription>{t('courses.ransomware.ransomPopupPart3')}<strong>{t('courses.ransomware.ransomPopupPart4')}</strong>.<br/><br/>{t('courses.ransomware.ransomPopupPart5')}<br/><br/>bc1qj7a5w8myrljmqjg2kxha8xu8kfwtka9evvlall<br/><br/>{t('courses.ransomware.ransomPopupPart6')}<strong>{t('courses.ransomware.ransomPopupPart7')}.</strong>
                    </WindowDescription></RansomwareBody>
            </RansomwareWrapper>
            </RansomwareContainer>
            </WindowContainer>
        }
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
  
  export default EncryptedRansomwareDesktop;
  