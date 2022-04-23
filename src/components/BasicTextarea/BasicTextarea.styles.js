import styled from "styled-components";
import colors from "constans/colors"

export const Textarea = styled.textarea`
font-family: inherit;
background-color: ${colors.darkestPurple};
padding: 15px;
margin: 10px 0 20px 0;
border: none;
outline: none;
resize: none;
width: 100%;
height: 150px;
color: ${colors.white};
font-size: 15px;
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