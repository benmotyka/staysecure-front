import styled from "styled-components";
import colors from "constans/colors"
import {Arrow as ArrowButton} from "components/Button/Button.styles"
import { notebookWidth } from "components/Notebook/Notebook.styles";
import {courseSidebarWidth} from "components/Course/Sidebar.styles"
import {GiPlainSquare as StepIcon} from "react-icons/gi"

export const Container = styled.div`
margin: 0 ${notebookWidth} 0 ${courseSidebarWidth};
height: 80px;
background-color: ${colors.darkPurple};
display: grid;
grid-template-columns: 8% 84% 8%;
grid-template-rows: 1fr;

@media screen and (max-width: 600px) {
    display: none;
}
`

export const ChangeSlideButton = styled.button`
transform: ${props => props.previous ? "rotate(180deg)": ""};
height: 100%;
background-color: ${colors.darkestPurple};
opacity: ${props => props.disabled ? "10%": "100%"};
cursor: ${props => props.disabled ? "normal": "pointer"};
border: none;
transition: 0.2s all ease-in-out;
&:hover {
background-color: ${props => props.disabled ? colors.darkestPurple: colors.mediumDarkPurple};
}
`

export const Arrow = styled(ArrowButton)`
font-size: 30px;
color: ${colors.orange};
`

export const Step = styled(StepIcon)`
font-size: 20px;
margin: 0 10px;
cursor: pointer;
color: ${({ active }) =>
    active ? colors.lightGreen : colors.white};
transform: ${props => props.interactive ? "rotate(45deg)": ""};
transition: 0.2s all ease-in-out;
&:hover{
    color: ${colors.lightGreen};
}
`

export const StepsWrapper = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;

`