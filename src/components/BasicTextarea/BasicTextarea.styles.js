import styled from "styled-components";
import colors from "constans/colors"

export const Textarea = styled.textarea`
font-family: inherit;
background-color: ${colors.mediumDarkPurple};
padding: ${props => props.bigFont ? '15px 25px' : '15px'};
margin: 10px 0;
border: none;
outline: none;
resize: none;
width: 100%;
min-height: 100px;
border-radius: 5px;
border: 1px solid ${colors.darkestPurple};
color: ${colors.white};
font-size: ${props => props.bigFont ? '18px' : '15px'};
line-height: 20px;
box-sizing: border-box;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: ${colors.orange};
}
`