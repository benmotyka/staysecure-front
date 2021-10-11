import styled from "styled-components";

export const Container = styled.div``
export const Header = styled.h2`
font-family: 'Poppins', sans-serif;
color: #FFFFFF;
font-size: 26px;
margin: 0;
`
export const Line = styled.hr`
margin: 35px 0;
opacity: 10%;
`

export const ItemsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 40px;
grid-template-rows: 1fr;
`