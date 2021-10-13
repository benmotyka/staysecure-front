import styled, {css} from "styled-components";
import colors from "constans/colors"
import {Link as LinkR} from "react-router-dom"

export const sidebarWidth = "350px";
export const Container = styled.ul`
height: 100%;
width: ${sidebarWidth};
background-color: ${colors.darkPurple};
margin: 0;
list-style: none; 
padding: 0;
`
const Text = css`
color: ${colors.white};
`

export const Item = styled.li`
${Text};
font-size: ${props => props.header ? "24px": "20px"};
cursor: ${props => props.header ? "": "pointer"};
height: 40px;
padding: 15px 30px;
position: relative;
display: flex;
align-items: center;
&:hover{
    background-color: ${props => props.header ? "": colors.darkestPurple};
}

&:before {
  content : "";
  position: absolute;
  left    : 30px;
  bottom  : 0;
  height  : 1px;
  width   : calc(${sidebarWidth} - 30px - 30px); 
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  border-bottom: ${props => props.noBorder ? "none" : ""};
}

`


export const Link = styled(LinkR)`
text-decoration: none;
color: inherit;
`