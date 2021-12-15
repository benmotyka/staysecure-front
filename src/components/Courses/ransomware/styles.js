import styled from "styled-components";
import colors from "constans/colors.js"
import {AiOutlineFile as FileIcon, AiOutlineMail as MailIcon} from "react-icons/ai"

export const ContainerOneItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperOneItem = styled.div`
height: 90%;
width: 90%;
`

export const PageBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
justify-content: center;
align-items: center;
`;

export const DownloadContainer = styled.ul`
position: absolute;
bottom: 0;
width: 100%;
height: 80px;
background-color: ${colors.grey};
list-style: none;
margin: 0;
padding: 15px;
box-sizing: border-box; 
display: flex;
align-items: center;
transition: 0.3s all ease-in-out;
opacity: ${props => props.active ? '100%' : '0'};
`

export const DownloadItem = styled.li`
border: 1px solid rgba(255,255,255,0.6);
padding: 10px 25px;
height: 60%;
display: flex;
gap: 20px;
cursor: ${props => props.active ? 'pointer' : 'auto'};
`

export const File = styled(FileIcon)`
font-size: 25px;
`

export const DownloadItemWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Header = styled.h5`
font-size: 14px;
margin: 0;
`

export const Description = styled.p`
font-size: 11px;
margin: 0;
`

export const MailPageSidebar = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
height: 50px;
background-color: ${colors.grey};
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

export const Mail = styled(MailIcon)`
font-size: 35px;
color: ${colors.white};
`

export const MailPageHeader = styled.h3`
font-size: 25px;
color: ${colors.white};
`

export const MailContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const MailHeaderContainer = styled.div`
height: 100px;
width: 100%;
box-sizing: border-box; 
background-color: #eee;
padding: 10px;
`

export const MailDetail = styled.p`
margin: 0;
`

export const MailWrapper = styled.div`
width: 80%;
height: 70%;
background-color: #ccc;
box-sizing: border-box; 
`

export const MailBody = styled.div`
padding: 25px;
`

export const MailText = styled.p`
font-size: 14px;
color: ${colors.black};
`

export const DownloadContainerHeader = styled.h4`
font-size: 20px;
font-weight: bold;
margin-right: 25px;
`

export const RunFileContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: ${props => props.active ? '100%' : '0'};
z-index: ${props => props.active ? '100' : '-100'};
transition: 0.3s all ease-in-out;

`

export const RunFileWrapper = styled.div`
width: 400px;
background-color: ${colors.white};
height: 130px;
padding: 15px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
flex-direction: column;
`

export const RunFileButton = styled.button`
padding: 5px 15px;
`

export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`