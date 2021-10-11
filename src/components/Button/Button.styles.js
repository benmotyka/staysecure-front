import styled, {css} from "styled-components";
import colors from "constans/colors.js"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"

const Text = css`
color: ${colors.white};
font-size: 16px;
`

export const Arrow = styled(ArrowIcon)`
margin-left: 10px;
font-size: 18px;
transition: 0.2s all ease-in-out;
`

export const ButtonStyled = styled.button`
${Text};
background-color: ${colors.orange};
outline: none;
border: none;
padding: 10px 12px;
border-radius: 3px;
display: flex;
align-items: center;
cursor: pointer;
transition: 0.2s all ease-in-out;

&:hover{
    background-color: ${colors.hoverOrange}
}
`