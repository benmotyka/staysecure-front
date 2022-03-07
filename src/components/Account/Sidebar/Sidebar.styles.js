import styled, {css} from "styled-components";
import colors from "constans/colors"
import {Link as LinkR} from "react-router-dom"

export const sidebarWidth = "350px";
export const Container = styled.ul`
height: 100%;
background-color: ${colors.darkPurple};
margin: 0;
list-style: none; 
padding: 0 0 10px 30px;


`
const Text = css`
color: ${colors.white};
`

export const Item = styled.li`
${Text};
font-size: ${props => props.header ? "24px": "20px"};
cursor: ${props => props.header ? "": "pointer"};

padding: 15px 10px;
margin-right: 30px;
position: relative;
display: flex;
align-items: center;
transition: 0.2s background-color ease-in-out;
&:hover{
    background-color: ${props => props.header ? "": colors.darkestPurple};
}

&:before {
  content : "";
  position: absolute;
  left    : 0;
  bottom  : 0;
  height  : 1px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  border-bottom: ${props => props.noBorder ? "none" : ""};
}

@media screen and (max-width: 1000px) {
padding: 10px 5px;
font-size: 18px;
}
`


export const Link = styled(LinkR)`
text-decoration: none;
color: inherit;
`

export const Highlight = styled.span`
color: ${colors.orange};
`