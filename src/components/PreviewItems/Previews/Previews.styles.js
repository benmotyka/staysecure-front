import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import colors from "constans/colors.js"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"
import {AiOutlineStar as LevelIcon} from "react-icons/ai"

export const Body = styled.div`
padding: 10px;
background-color: ${colors.mediumDarkPurple};
color: ${colors.white};
border: 1px solid ${colors.mediumDarkPurple};
transition: 0.2s all ease-in-out;
z-index: 100;
max-height: 130px;
min-width: 300px;
position: relative;

`

const Text = css`
color: ${colors.white};
`

export const ImageContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Image = styled.img`
width:100%;
transition: 0.2s all ease-in-out;
z-index: 10;
`
export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
margin-bottom: 15px;
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
font-size: 15px;
margin: 2px 0;
`

export const Container = styled(Link)`
text-decoration: none;
height: ${props => props.noimage ? "140px": "300px"};
display: grid;
grid-template-rows: ${props => props.noimage ? "1fr": "35% 65%"};
margin: 20px 20px;

&:hover ${Body} {
    border: 1px solid ${colors.orange};
}

&:hover ${Image} {
    opacity: 0.5;
}
`

export const DifficultyLevel = styled(LevelIcon)`
font-size: 25px;
color: ${colors.gold};
`

export const DifficultyWrapper = styled.div`
position: absolute;
bottom: 0;
right: 10px;
`