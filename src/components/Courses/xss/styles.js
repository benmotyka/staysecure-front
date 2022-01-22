import styled from "styled-components";
import colors from "constans/colors";
import { RiUserFill as UserIcon } from "react-icons/ri";

export const BrowserContainer = styled.div`
width: 100%;
height: 90%;
position: relative;
`;

export const PageWrapper = styled.div`
display: grid;
grid-template-columns: 30% 40% 30%;
width: 100%;
height: 100%;
`;

export const PageSection = styled.section`
height: 100%;
width: 100%;
border-left: ${(props) =>
  props.withBorders ? `1px solid ${colors.grey}` : ""};
border-right: ${(props) =>
  props.withBorders ? `1px solid ${colors.grey}` : ""};
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: hidden;

`;

export const User = styled(UserIcon)`
font-size: 35px;
background-color: ${(props) => (props.orange ? colors.orange : colors.darkPurple)};
border-radius: 50%;
color: ${colors.white};
padding: 10px;
`;

export const FriendList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
`;

export const FriendItem = styled.li`
width: 100%;
min-height: 70px;
box-sizing: border-box;
border-bottom: 1px solid ${colors.darkPurple};
display: grid;
grid-template-columns: 30% 70%;
align-items: center;
padding: 0 15px;
`;

export const HeaderItem = styled(FriendItem)`
display: flex;
`;

export const SectionHeader = styled.h3`
font-size: 25px;
text-align: center;
width: 100%;
margin: 15px 0;
`;

export const UserData = styled.div`
height: 100%;
padding: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px 0;
`;

export const FakeData = styled.div`
padding: 7px 4px;
border-radius: 15px;
opacity: 0.7;
width: 20px;
width: ${(props) => (props.short ? "30%" : "65%")};
background-color: ${(props) => (props.orange ? colors.orange : colors.darkPurple)};
`;

export const ItemWrapper = styled.div`
text-align: center;
margin: 15px 0;
`