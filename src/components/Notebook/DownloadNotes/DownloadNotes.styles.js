import styled from "styled-components";
import colors from "constans/colors";
import {FaDownload} from "react-icons/fa"

export const DownloadNotesContainer = styled.div`
height: 50px;
border: 1px solid ${colors.darkestPurple};
border-left: none;
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${colors.darkPurple};
cursor: pointer;
transition: 200ms;
&:hover{
    background-color: ${colors.darkestPurple};
}
position: fixed;
width: 250px;
bottom: 0;
`

export const Text = styled.h5`
font-size: 16px;
color: ${colors.white};
`

export const DownloadIcon = styled(FaDownload)`
color: ${colors.orange};
font-size: 25px;
`