import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
margin-bottom: 80px;
    padding: 25px;
max-width: 1200px;
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

export const ItemsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
}
`