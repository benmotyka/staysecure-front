import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
padding-right: calc(100% - 500px);
padding-bottom: 70px;
background-color: ${colors.darkPurple};
`
export const Header = styled.h3`
margin: 0 0 20px 0;
font-size: 18px;
color: ${colors.white};
`