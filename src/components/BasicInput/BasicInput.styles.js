import styled from "styled-components";
import colors from "constans/colors";

export const Input = styled.input`
font-size: 18px;
color: ${colors.white};
margin: 15px 0;
padding: 15px 25px;
background-color: ${colors.mediumDarkPurple};
border: 1px solid ${colors.darkestPurple};
border-radius: 5px;
outline: none;
width: ${props => props.fullWidth ? '100%' : ''};
box-sizing: border-box;
`;
