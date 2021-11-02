import styled, {css} from "styled-components";
import colors from "constans/colors"
import {IoIosArrowForward as Arrow} from "react-icons/io"

export const Container = styled.div`
display: flex;
width: 60%;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${colors.darkPurple};
padding: 25px;
`

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

const Text = css`
font-size: 20px;
opacity: 0.8;
color: ${colors.white};
transition: 0.2s all ease-in-out;
`

export const NavigateArrow = styled(Arrow)`
${Text};
cursor: pointer;
transform: ${props => props.back ? "rotate(180deg)" : ""};
`

export const FooterText = styled.p`
${Text}
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    color: ${colors.hoverOrange};
}

&:hover ${NavigateArrow} {
    color: ${colors.hoverOrange};
  }
`

export const Body = styled.div`
width: 100%;
`

export const HeaderContainer = styled.div`
padding: 0 25px;
`

export const Header = styled.h2`
${Text};
font-size: 30px;
`

export const Question = styled.h3`
${Text};
font-size: 25px;
opacity: 1;
`

export const AnswersContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
padding: 0 25px;
gap: 30px;
margin-bottom: 100px;
`

export const Answer = styled.button`
opacity: none;
background: ${colors.darkestPurple};
border: none;
cursor: pointer;
font-size: 25px;
padding: 10px 20px;
color: ${colors.white};
text-align: left;
border: 2px solid ${colors.darkestPurple};
transition: 0.1s all ease-in-out;

&:hover {
    border: 2px solid ${colors.hoverOrange};
}
`