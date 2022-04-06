import styled, {css} from "styled-components";
import colors from "constans/colors"

export const HeaderWrapper = styled.div`
width: 50%;
text-align: center;
`

export const Header = styled.h1`
font-size: 32px;
color: ${colors.white};
margin: 0;
`

export const CategoriesWrapper = styled.div``
export const QuestionsWrapper = styled.div``

export const FaqInput = styled.input`
font-size: 18px;
color: ${colors.white};
margin: 15px 0;
padding: 15px 25px;
background-color: ${colors.mediumDarkPurple};
border: 1px solid ${colors.darkestPurple};
border-radius: 5px;
outline: none;
width: 100%;
box-sizing: border-box;
`