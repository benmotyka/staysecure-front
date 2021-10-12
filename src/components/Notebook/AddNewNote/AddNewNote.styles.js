import styled  from "styled-components";
import colors from "constans/colors";
import {IoAddCircleOutline} from "react-icons/io5"

export const AddNewNoteButtonWrapper = styled.div`
margin: 0 auto;
width: 70%;
height: 50px;
border: 1px solid ${colors.black};
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${colors.darkPurple};
cursor: pointer;
transition: 200ms;
&:hover{
    background-color: ${colors.mediumDarkPurple};
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
width: 100%;
background-color: ${colors.mediumDarkPurple};
position: absolute;
right: 110%;
top: 0;
height: ${({ active }) => (active ? "200px" : "0")};
border: ${({ active }) => (active ? `1px solid ${colors.black}` : "none")};
transition: 300ms all ease-in-out;
padding: ${({ active }) => (active ? "15px" : "0")};
`

export const NoteText = styled.textarea`
background-color: transparent;
border: none;
outline: none;
resize: none;
width: 100%;
height: 75%;
color: ${colors.white};
font-size: 15px;
`

export const NoteButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`