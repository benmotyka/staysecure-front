import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
background-color: ${colors.darkPurple};
padding: 25px;
display: grid;
grid-template-columns: 1fr 1fr;
height: 120px;
margin-top: 35px;
` 

export const Section = styled.section`
margin-left: ${props => props.alignRight ? "auto": "0"};
display: ${props => props.alignRight ? "flex": "block"};
align-items: center;
`
export const Header = styled.h4`
margin: 0 0 20px 0;
color: ${colors.white};
font-size: 18px;
`
export const Description = styled.p`
color: ${colors.white};
font-size: 16px;
opacity: 0.7;
margin: 0;
`
