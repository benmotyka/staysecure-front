import {
  Body,
  Speaker,
  Top,
  Sensor,
  Camera,
  TopSeparator,
  BottomSeparator,
  Screen,
  PowerButton,
  VolumeUpButton,
  VolumeDownButton,
  SleepButton,
  Bottom,
  HomeButton,
  ScreenTopBar,
  ScreenTopBarText,
  ScreenBottomBar,
  ScreenBottomBarItem,
  ScreenBottomBarImage,
  Notification
} from "./Iphone.styles";

const Iphone = (props) => {
  const newDate = new Date();

  return (
    <Body>
      <Top>
        <Camera />
        <Sensor />
        <Speaker />
      </Top>
      <TopSeparator />
      <Screen backgroundUrl={process.env.PUBLIC_URL + "/iphone/wallpaper.png"}>
        <ScreenTopBar>
          <ScreenTopBarText>
            {newDate.getHours()}:
            {(newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes()}
          </ScreenTopBarText>
        </ScreenTopBar>
        {props.children}
        <ScreenBottomBar>
          <ScreenBottomBarItem>
            <ScreenBottomBarImage src="iphone/camera.png" />
          </ScreenBottomBarItem>{" "}
          <ScreenBottomBarItem>
            <ScreenBottomBarImage src="iphone/safari.png" />
          </ScreenBottomBarItem>{" "}
          <ScreenBottomBarItem>
            <ScreenBottomBarImage onClick={() => {
              props.onClick(true)
            }} src="iphone/messages.png" />
            <Notification>1</Notification>
          </ScreenBottomBarItem>{" "}
          <ScreenBottomBarItem>
            <ScreenBottomBarImage src="iphone/phone.png" />
          </ScreenBottomBarItem>
        </ScreenBottomBar>
      </Screen>
      <PowerButton />
      <SleepButton />
      <VolumeUpButton />
      <VolumeDownButton />
      <BottomSeparator />
      <Bottom>
        <HomeButton onClick={() => props.onClick(false)}/>
      </Bottom>
    </Body>
  );
};

export default Iphone;
