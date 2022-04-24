import styled  from "styled-components";
import colors from "constans/colors";
import {IoAddCircleOutline} from "react-icons/io5"

export const AddNewNoteButtonWrapper = styled.div`
margin: 0 auto;
width: 70%;
border: 1px solid ${colors.darkestPurple};
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${colors.darkPurple};
cursor: pointer;
transition: 200ms;
&:hover{
    background-color: ${colors.darkestPurple};
}
`

export const AddNewNoteContainer = styled.div`
position: relative;
`
export const Text = styled.h5`
font-size: 16px;
color: ${colors.white};

`

export const AddIcon = styled(IoAddCircleOutline)`
color: ${colors.orange};
font-size: 25px;
`

export const NoteContainer = styled.div`
border-radius: 5px;
width: 100%;
background-color: ${colors.lightPurple};
position: absolute;
right: 110%;
top: 0;
min-height: auto;
border: 1px solid ${colors.darkestPurple};
padding: 15px;
box-sizing: border-box;

@media screen and (max-width: 600px) {
    right: 0;
    top: -100px;
}
`

export const NoteButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`