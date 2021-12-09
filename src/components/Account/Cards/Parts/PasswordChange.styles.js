import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: ${props => props.small ? "10px 0": "25px"};
margin-bottom: ${props => props.small ? "0": "20px"};
padding-right: calc(100% - 500px);
padding-bottom: ${props => props.noPaddingBottom ? "0": "20px"};
background-color: ${colors.darkPurple};
`
export const Header = styled.h3`
margin: 0 0 20px 0;
font-size: 18px;
color: ${colors.white};
`