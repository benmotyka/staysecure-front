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
} from "./Iphone.styles";

const Iphone = (props) => {
  return (
    <Body>
      <Top>
        <Camera />
        <Sensor />
        <Speaker />
      </Top>
      <TopSeparator />
      <Screen>
          {props.children}
      </Screen>
      <PowerButton />
      <SleepButton />
      <VolumeUpButton />
      <VolumeDownButton />
      <BottomSeparator />
      <Bottom>
        <HomeButton />
      </Bottom>
    </Body>
  );
};

export default Iphone;
