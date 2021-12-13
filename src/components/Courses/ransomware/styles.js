import styled from "styled-components";
import colors from "constans/colors.js"
import {AiOutlineFile as FileIcon} from "react-icons/ai"

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
opacity: ${props => props.showDownloadBar ? '100%' : '0'};
`

export const DownloadItem = styled.li`
border: 1px solid rgba(255,255,255,0.6);
padding: 10px 25px;
height: 60%;
display: flex;
gap: 20px;
cursor: pointer;
`

export const File = styled(FileIcon)`
font-size: 20px;
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