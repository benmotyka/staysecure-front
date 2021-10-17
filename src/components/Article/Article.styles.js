import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
width: 100%;
max-width: 1200px;
margin-bottom: 80px;
min-height: 200px;

    padding: 25px;
`
export const Header = styled.h2`
color: ${colors.white};
font-size: 26px;
margin: 0;
`

export const Line = styled.hr`
margin: 35px 0;
opacity: 10%;
`
export const Content = styled.p`
color: ${colors.white};
opacity: 0.7;
`

export const Link = styled.p`
font-size: 50px;
`