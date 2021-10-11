import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import colors from "constans/colors.js"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"

export const Container = styled(Link)`
text-decoration: none;
height: ${props => props.noImage ? "140px": "300px"};
display: grid;
grid-template-rows: ${props => props.noImage ? "1fr": "45% 55%"};
`

const Text = css`
font-family: 'Poppins', sans-serif;
color: ${colors.white};
`

export const ImageContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Image = styled.img`
max-width:100%;
max-height:100%;
`

export const Body = styled.div`
padding: 25px;
background-color: ${colors.mediumDarkPurple};
color: ${colors.white};
border: 1px solid ${colors.mediumDarkPurple};
&:hover{
    border: 1px solid ${colors.orange};
}
`
export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
margin-bottom: 30px;
`
export const Header = styled.h4`
${Text};
font-size: 20px;
margin: 0;
`
export const Arrow = styled(ArrowIcon)``
export const Description = styled.p`
${Text};
opacity: 0.7;
font-size: 16px;
`