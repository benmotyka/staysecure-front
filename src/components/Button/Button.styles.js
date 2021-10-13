import styled, {css} from "styled-components";
import colors from "constans/colors.js"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"
import {AiOutlinePlus as PlusIcon} from "react-icons/ai"

const Text = css`
color: ${colors.white};
font-size: 16px;
`

const Icon = css`
margin-left: auto;
font-size: 18px;
transition: 0.2s all ease-in-out;
`

export const Arrow = styled(ArrowIcon)`
${Icon};
`

export const Plus = styled(PlusIcon)`
${Icon};
`

export const ButtonStyled = styled.button`
gap: 10px;
font-family: 'Poppins', sans-serif;
${Text};
background: ${props => props.green ? colors.lightGreen : colors.orange};
outline: none;
border: none;
padding: ${props => props.full ? "15px 20px": "10px 12px"};
border-radius: 3px;
display: flex;
align-items: center;
cursor: pointer;
transition: 0.2s all ease-in-out;
width: ${props => props.full ? "100%": "auto"};

&:hover{
    background-color: ${props => props.green ? colors.hoverLightGreen : colors.hoverOrange};
}
`