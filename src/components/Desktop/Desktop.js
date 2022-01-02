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
} from "./Desktop.styles.js";

const Desktop = (props) => {
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
          <IconText>Sprawozdanie.docx</IconText>
        </Icon>
        <Icon>
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
    </DesktopContainer>
  );
};

export default Desktop;
