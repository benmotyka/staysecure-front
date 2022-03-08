import styled from "styled-components";
import colors  from "constans/colors";
import {BsPencil} from "react-icons/bs"
import {IoClose as CloseIcon} from "react-icons/io5"
import {FaTrash} from "react-icons/fa"

export const notebookWidth = "250px"

export const NotebookContainer = styled.div`
`
export const NotebookIconContainer = styled.div`
height: 60px;
width: 60px;
background-color: ${colors.orange};
bottom: 20%;
position: fixed;
right: ${({ active }) => (active ? "240px" : "-10px")};
transition: 500ms all ease-in-out;
cursor: pointer;
border-radius: 50% 15% 15% 50%;
display: flex;
align-items: center;
z-index: 100;
justify-content: center;
`

export const NotebookIcon = styled(BsPencil)`
font-size: 25px;
right: 5px;
color: ${colors.white};
`

export const NotebookWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ active }) => (active ? "0" : "-251px")};
  transition: 500ms all ease-in-out;
  background-color: ${colors.mediumDarkPurple};
  width: ${notebookWidth};
  height: 100vh;
  border-left: 1px solid ${colors.darkestPurple};
  overflow: none;
  z-index: 200;
`
export const NotebookHeaderContainer = styled.div`
padding: 25px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const NotebookHeader = styled.h5`
color: ${colors.white};
font-size: 30px;
margin: 0;
`
export const NotebookBody = styled.div`
width: 100%;
max-height: 60%;
overflow-y: auto;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: ${colors.orange};
}
`

export const NotebookItem = styled.div`
margin: 20px 0;
cursor: pointer;
height: 70px;
padding: 10px;
color: ${colors.white};
background-color: ${colors.darkPurple};
transition: 200ms;
line-height: 15px;
&:hover{
background-color: ${colors.hoverOrange}
}
`

export const NotebookItemContainer = styled.div`
position: relative;
`

export const NotebookShowItemText = styled.p`
font-size: 18px;
color: ${colors.white};
margin: 0;
`

export const NotebookShowItemContainer = styled.div`
background-color: ${colors.mediumDarkPurple};
position: absolute;
min-width: 100%;
box-sizing: border-box;
top: 50px;
height: ${({ active }) => (active ? "auto" : "0")};
padding: ${({ active }) => (active ? "5px 10px 10px 10px" : "0")};
transition: 500ms ease-in-out;
transition-property: height, padding;
right: 110%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: ${({ active }) => (active ? `1px solid ${colors.darkestPurple}` : "none")};
border-radius: 5px;

@media screen and (max-width: 600px) {
  right: 0;
}
`

export const NotebookShowItemClose = styled(CloseIcon)`
padding: 0;
font-size: 35px;
cursor: pointer;
margin-left: auto;
color: ${colors.orange};
`;
export const NotebookShowItemDelete = styled(FaTrash)`
color: ${colors.orange};
margin-left: auto;
margin-right: 10px;
cursor: pointer;
`

export const NotebookShowItemPart = styled.div`
width: 100%;
display: flex;
`

export const NotebookActionsContainer = styled.div`
width: 100%;
margin-top: 15px;
`