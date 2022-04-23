import styled from "styled-components";
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
min-width: min(300px, 80%);
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
