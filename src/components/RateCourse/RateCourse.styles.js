import styled, {css} from "styled-components";
import colors from "constans/colors"
import {
    EmptyRateLevel as Rate,
  } from "components/PreviewItems/Previews/Previews.styles";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 25px;
border-radius: 5px;
background-color: ${colors.mediumDarkPurple};
gap: 10px;
`

export const Header = styled.h2`
color: ${colors.white};
opacity: 0.7;
margin: 0;
`

export const Star = styled(Rate)`
  font-size: 35px;
  cursor: pointer;
  color: ${props => props.active ? colors.gold : ''};
`;

export const Input = styled.textarea`
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
