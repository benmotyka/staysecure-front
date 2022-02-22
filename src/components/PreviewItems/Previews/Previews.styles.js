import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import colors from "constans/colors.js"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"
import {AiOutlineStar as LevelIcon} from "react-icons/ai"
import {BiCommentDetail as CommentIcon} from "react-icons/bi"

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
display: flex;
flex-direction: column;

`

const Text = css`
color: ${colors.white};
opacity: 0.7;
transition: 0.2s all ease-in-out;
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

const ItemsContainer = css`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
`
export const HeaderContainer = styled.div`
${ItemsContainer};
margin-bottom: 15px;
`

export const FooterContainer = styled.div`
${ItemsContainer};
margin-top: auto;
`

export const Header = styled.h4`
${Text};
font-size: 20px;
margin: 0;
display: flex;
align-items: center;
`

const Star = css`
font-size: 18px;
opacity: 0.6;
transition: 0.2s all ease-in-out;
`

export const RateLevel = styled(LevelIcon)`
color: ${colors.gold};
${Star};
`

export const EmptyRateLevel = styled(LevelIcon)`
color: ${colors.darkestPurple};
${Star};

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

&:hover ${RateLevel} {
    opacity: 1;
}

&:hover ${Header}{
    opacity: 1;
}

&:hover ${Description}{
    opacity: 1;
}
`

export const DifficultyWrapper = styled.div`
`

export const CommentWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: 600;
font-size: 16px;
`

export const Comment = styled(CommentIcon)`
font-size: 16px;
color: ${colors.white};
`