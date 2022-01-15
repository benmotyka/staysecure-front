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
        <Icon
          onClick={() => {
            setShowTaskManager(true);
          }}
        >
          <IconImage src="desktop/task_manager.png" />
          <IconText>Menedżer zadań</IconText>
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
            <WindowDescription>Menedżer zadań</WindowDescription>
            <Close onClick={() => setShowTaskManager(false)} />
          </WindowHeader>
          <TaskManagerContainer>
            <TaskManagerBar>
              <TaskManagerBarItem>Plik</TaskManagerBarItem>
              <TaskManagerBarItem>Opcje</TaskManagerBarItem>
              <TaskManagerBarItem>Widok</TaskManagerBarItem>
            </TaskManagerBar>
            <TaskManagerBar>
              <TaskManagerBarItem withBg active>
                Procesy
              </TaskManagerBarItem>
              <TaskManagerBarItem withBg>Wydajność</TaskManagerBarItem>
              <TaskManagerBarItem withBg>Historia aplikacji</TaskManagerBarItem>
              <TaskManagerBarItem withBg>Uruchamianie</TaskManagerBarItem>
              <TaskManagerBarItem withBg>Użytkownicy</TaskManagerBarItem>
              <TaskManagerBarItem withBg>Szczegóły</TaskManagerBarItem>
              <TaskManagerBarItem withBg>Usługi</TaskManagerBarItem>
            </TaskManagerBar>
            <TaskManagerTable>
              <TaskManagerTableRow>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Nazwa</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Stan</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Procesor</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Pamięć</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Dysk</TaskManagerHeaderText>
                </TaskManagerTableHeader>
                <TaskManagerTableHeader>
                  <TaskManagerHeaderText>Sieć</TaskManagerHeaderText>
                </TaskManagerTableHeader>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>System</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>10.6%</TaskManagerTableData>
                <TaskManagerTableData yellow right>103.6 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0.8 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>Menedżer zadań</TaskManagerTableData>
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
                <TaskManagerTableData>Klient DHCP</TaskManagerTableData>
                <TaskManagerTableData></TaskManagerTableData>
                <TaskManagerTableData yellow right>0.3%</TaskManagerTableData>
                <TaskManagerTableData yellow right>1.6 MB</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 MB/s</TaskManagerTableData>
                <TaskManagerTableData yellow right>0 Mb/s</TaskManagerTableData>
              </TaskManagerTableRow>
              <TaskManagerTableRow>
                <TaskManagerTableData>Klient DNS</TaskManagerTableData>
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
