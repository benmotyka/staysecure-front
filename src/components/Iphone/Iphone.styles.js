import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import {BsFillUnlockFill as LockIcon} from "react-icons/bs"


export const Body = styled.div`
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
    0 0 30px 0px rgba(0, 0, 0, 0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 877px;
  width: 423px;
  position: relative;
  margin: 30px auto;
  transform: scale(0.8);
  margin-top: -50px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  padding: 5px 110px 40px;
  position: relative;
`;

export const Speaker = styled.span`
  display: block;
  width: 70px;
  height: 6px;
  margin: 0 auto;
  border-radius: 6px;
  background: #292728;
`;

export const Camera = styled.span`
  display: block;
  margin: 0 auto;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 13px;
  background: #333;
`;

export const Sensor = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background: #333;
  margin-top: -5px;
  border-radius: 50%;
  position: absolute;
`;

const Separator = css`
  display: block;
  width: 423px;
  height: 15px;
  border: {
    left: 5px solid #bbb;
    right: 5px solid #bbb;
  }
  position: absolute;
  left: -5px;
`;

export const TopSeparator = styled.div`
  ${Separator};
  top: 65px;
`;

export const BottomSeparator = styled.div`
  ${Separator};
  bottom: 65px;
`;

export const Screen = styled.div`
  background: #000;
  border: 1px solid #fff;
  height: 677px;
  width: 375px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 3px;
  overflow: hidden;
  background-image: ${props => props.backgroundUrl ? `url(${props.backgroundUrl})` : ''};
  background-size: cover;
  position: relative;
`;

export const ScreenTopBar = styled.div`
position: absolute;
height: 25px;
left: 0;
right: 0;
top: 0;
text-align: center;
z-index: 100;
`

export const ScreenTopBarText = styled.p`
margin: 0;
font-size: 14px;
color: ${colors.white};
font-weight: bold;
`

export const ScreenBottomBar = styled.div`
background: rgba(0,0,0,0.3);
height: 90px;
position: absolute;
left: 0;
right: 0;
bottom: 0;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
z-index: 10;
`

export const ScreenBottomBarItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const Notification = styled.span`
position: absolute;
top: 7px;
right: 7px;
width: 22px;
height: 22px;
border-radius: 50%;
background-color: ${colors.red};
color: #fff;
text-align: center;
margin: 0;
font-size: 14px;
cursor: pointer;
font-weight: bold;
`

export const ScreenBottomBarImage = styled.img`
cursor: pointer;
width: 75%;
`

const Button = css`
  display: block;
  background: #ccc;
  position: absolute;
  border-radius: 2px 0px 0px 2px;
  cursor: pointer;
`;

export const PowerButton = styled.span`
  ${Button};
  height: 40px;
  width: 3px;
  top: 100px;
  left: -8px;
`;

const LeftSideButton = css`
  height: 60px;
  width: 5px;
  left: -10px;
`;

export const VolumeUpButton = styled.span`
  ${Button};
  ${LeftSideButton};
  top: 170px;
`;

export const VolumeDownButton = styled.span`
  ${Button};
  ${LeftSideButton};
  top: 250px;
`;

export const SleepButton = styled.span`
  ${Button};
  ${LeftSideButton};
  left: auto;
  right: -10px;
  top: 170px;
  border-radius: 0px 2px 2px 0px;
`;

export const Bottom = styled.div`
  padding: 15px 0 0;
`;

export const HomeButton = styled.span`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  width: 68px;
  height: 68px;
  background: #ccc;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #303233 0%,
    #b5b7b9 50%,
    #f0f2f2 69%,
    #303233 100%
  );
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 4px;
  }
`;

export const MessagesApp = styled.div`
background-color: #000;
z-index: 20;
position: absolute;
inset: 0;
`

export const MessagesHeaderContainer = styled.div`
position: absolute;
color: ${colors.white};
top: 30px;
left: 0;
right: 0;
padding: 20px;
`

export const MessagesHeader = styled.h4`
margin: 0;
font-size: 30px;
color: #fff;
font-weight: bold;
margin-bottom: 5px;
`

export const MessagesSearch = styled.input`
padding: 10px 15px;
width: 100%;
outline: none;
background-color: #1C1C1E;
border-radius: 10px;
border: none;
font-size: 18px;
color: #919193;
box-sizing: border-box;
`

export const MessagesList = styled.ul`
list-style: none;
padding: 0;
position: absolute;
left: 0;
top: 150px;
right: 0;
`

export const MessageItem = styled.li`
display: grid;
position: relative;
list-style: none;
width: 100%;
height: 100px;
cursor: pointer;
`

export const MessageDetails = styled.div`
border-top: 1px solid #232323;
display: flex;
position: absolute;
left: 80px;
right: 0;
height: 60px;
flex-direction: column;
padding: 10px 0;
color: ${colors.white};
`

export const MessageHeader = styled.h5`
margin: 0;
font-size: 16px;
color: #E4E4E4;
width: 100%;
`

export const MessageHeaderDate = styled.span`
position: absolute;
font-size: 16px;
right: 20px;
color: #4A4A4C;
`

export const MessageContent = styled.p`
font-size: 16px;
margin: 0;
color: #666668;
padding-right: 10px;
line-height: 20px;
`

export const MessageAvatar = styled.img`
width: 50px;
position: absolute;
left: 20px;
top: 10px;
`

export const MessageNotification = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
position: absolute;
top: 30px;
left: 5px;
background-color: #1280FF;
`

export const SmsApp = styled.div`
background-color: #000;
z-index: 30;
position: absolute;
inset: 0;
`

export const SmsHeader = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
background-color: #1E1E1E;
height: 105px;
`

export const SmsBack = styled.span`
color: #2576ff;
font-size: 45px;
position: absolute;
left: 15px;
top: 10px;
cursor: pointer;
` 

export const SmsAvatar = styled.img`
position: absolute;
left: 42%;
top: 20px;
width: 60px;
`

export const SmsHeaderText = styled.p`
margin: 0;
font-size: 14px;
color: #fff;
text-align: center;
position: absolute;
bottom: 2px;
left: 0;
right: 0;
`

export const SmsMessage = styled.div`
position: absolute;
border-radius: 15px;
max-width: 80%;
padding: 10px;
background-color: #26252a;
top: 150px;
left: 15px;

&:before {
  content: '';
  position: absolute;
  left: -10px;
  bottom: 2px;
  width: 15px;
  height: 15px;
  background-color: #26252a;
  border-radius: 50%;
  z-index: -10;
}

&:after {
  content: '';
  position: absolute;
  left: -14px;
  bottom: 8px;
  width: 15px;
  height: 15px;
  background-color: #000;
  border-radius: 50%;
  z-index: -1; 
}
`

export const SmsMessageContent = styled.p`
color: #e3e3e5;
margin: 0;
line-height: 19px;
font-size: 16px;
`

export const SmsLink = styled.span`
color: #1d8cf2;
text-decoration: underline;
cursor: pointer;
`

export const WebpageApp = styled.div`
background-color: #fff;
z-index: 30;
position: absolute;
inset: 0;
display: flex;
flex-direction: column;
`

export const WebPageItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 25px;
box-sizing: border-box;
`

export const WebPageText = styled.p`
margin: 0;
`

export const WebPageSeparator = styled.div`
width: 100%;
height: 30px;
background-color: #EAEAEA;
padding: 5px 10px;
font-weight: bold;
`

export const WebPagePaymentMethodsList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 20px;
padding: 30px 20px;
`

export const WebPagePaymentMethod = styled.img`
width: 100px;
cursor: pointer;
`

export const WebPageLogo = styled.img`
width: 150px;
cursor: pointer;
margin: 25px 0;
`

export const WebPageNavigatorContainer = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 80px;
background-color: rgba(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: center;
`

export const WebPageInput = styled.input`
padding: 10px 15px;
padding-left: 40px;
width: 90%;
outline: none;
background-color: rgba(255,255,255,0.9);
border-radius: 10px;
border: none;
font-size: 17px;
color: #919193;
box-sizing: border-box;
`

export const RedLock = styled(LockIcon)`
font-size: 16px;
position: absolute;
top: 39%;
left: 35px;
color: ${colors.red};
`