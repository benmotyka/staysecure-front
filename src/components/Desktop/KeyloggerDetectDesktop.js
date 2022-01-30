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
  WindowContainer,
  TaskManagerContainer,
  TaskManagerBar,
  WindowDescription,
  TaskManagerBarItem,
  WindowHeader,
  Close,
  TaskManagerTable,
  TaskManagerTableRow,
  TaskManagerTableData,
  TaskManagerTableHeader,
  TaskManagerHeaderText,
} from "./Desktop.styles.js";

const KeyloggerDetectDesktop = (props) => {
  const [showTaskManager, setShowTaskManager] = useState(false);
  const {t} = useTranslation()

  const newDate = new Date();
  return (
    <DesktopContainer
      backgroundUrl={process.env.PUBLIC_URL + "/desktop/wallpaper.jpg"}
    >
      <BasicIcons>
        <Icon>
          <IconImage src="desktop/my_computer.ico" />
          <IconText>{t('desktop.myPc')}</IconText>
        </Icon>
        <Icon
          onClick={() => {
            setShowTaskManager(true);
          }}
        >
          <IconImage src="desktop/task_manager.png" />
          <IconText>{t('desktop.taskManager.taskManager')}</IconText>
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
      {showTaskManager && (
        <WindowContainer>
          <WindowHeader>
            <WindowDescription>{t('desktop.taskManager.taskManager')}</WindowDescription>
            <Close onClick={() => setShowTaskManager(false)} />
          </WindowHeader>
          <TaskManagerContainer>
            <TaskManagerBar>
              <TaskManagerBarItem>{t('desktop.taskManager.file')}</TaskManagerBarItem>
              <TaskManagerBarItem>{t('desktop.taskManager.options')}</TaskManagerBarItem>
              <TaskManagerBarItem>{t('desktop.taskManager.view')}</TaskManagerBarItem>
            </TaskManagerBar>
            <TaskManagerBar>
              <TaskManagerBarItem withBg active>
              {t('desktop.taskManager.processes')}
              </TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.performance')}</TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.appHistory')}</TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.starting')}</TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.users')}</TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.details')}</TaskManagerBarItem>
              <TaskManagerBarItem withBg>{t('desktop.taskManager.services')}</TaskManagerBarItem>
            </TaskManagerBar>
            <TaskManagerTable>
              <TaskManagerTableRow>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.name')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.state')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.procesor')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.memory')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.disc')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>{t('desktop.taskManager.network')}</TaskManagerHeaderText>
                </TaskManagerTableHeader>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                {/* @TODO: change it to list of objects and map through it */}
                <TaskManagerTableData>{t('desktop.taskManager.system')}</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>10.6%</TaskManagerTableData>
                <TaskManagerTableData yellow right>103.6 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0.8 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>{t('desktop.taskManager.taskManager')}</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>2.2%</TaskManagerTableData>
                <TaskManagerTableData yellow right>28.5 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow onClick={() => {
          props.setWaitForCorrectAnswer(false)
        }}>
                <TaskManagerTableData >wmpusrvc.exe</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>1.6%</TaskManagerTableData>
                <TaskManagerTableData yellow right>1.3 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0.1 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>{t('desktop.taskManager.dhcpClient')}</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>0.3%</TaskManagerTableData>
                <TaskManagerTableData yellow right>1.6 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>{t('desktop.taskManager.dnsClient')}</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>0.1%</TaskManagerTableData>
                <TaskManagerTableData yellow right>3.5 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>SysMain</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>0%</TaskManagerTableData>
                <TaskManagerTableData yellow right>1.3 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0.1 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
            </TaskManagerTable>
          </TaskManagerContainer>
        </WindowContainer>
      )}
    </DesktopContainer>
  );
};

export default KeyloggerDetectDesktop;
