import styled from "styled-components";
import { Link as NavbarLink } from "react-router-dom";
import colors from "constans/colors.js"
export const Container = styled.div`
background-color: ${colors.darkPurple};
position: sticky;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: ${props => props.smallPadding ? "0 30px": "0 270px"};

@media screen and (max-width: 1000px) {
    padding: 0 30px;
}

@media screen and (max-width: 650px) {
    padding: 10px 0;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}
`

export const Section = styled.section`
display: flex;
align-items: center;

@media screen and (max-width: 650px) {
    align-items: center;
    justify-content: center;
}
`

export const List = styled.ul`
list-style: none;
display: flex;
align-items: center;
padding: 0;
`

export const Item = styled.li`
margin: 0 25px;


@media screen and (max-width: 650px) {
margin: 0 10px;
}
`

export const Link = styled(NavbarLink)`
text-decoration: none;
color: ${colors.white};
transition: all 0.2s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&:hover{
    color: ${colors.orange};
}
`

export const ButtonContainer = styled.div`
@media screen and (max-width: 600px) {
    display: none;
}
`

export const AccountIcon = styled.img`

`