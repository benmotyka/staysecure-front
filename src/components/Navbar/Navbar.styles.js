import styled, {css} from "styled-components";
import { Link as NavbarLink } from "react-router-dom";
import colors from "constans/colors.js"
import {IoSettingsSharp as SettingsIcon} from "react-icons/io5"
export const navbarHeight = "80px";

const commonNavbar = css`
background-color: ${colors.darkPurple};
position: sticky;
height: ${navbarHeight};
display: flex;
align-items: center;
padding: ${props => props.smallPadding ? "0 45px": "0 270px"};
`

export const ContainerClean = styled.div`
${commonNavbar};
`
export const Container = styled.div`
${commonNavbar};
justify-content: space-between;
z-index: 10;
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

export const CourseSettings = styled(SettingsIcon)`
color: ${colors.orange};
font-size: 25px;
opacity: 0.5;
transition: 0.2s opacity ease-in-out;
cursor: pointer;

&:hover {
    opacity: 1;
}
`

export const CourseSettingsContainer = styled.div`
`

export const CourseSettingsWrapper = styled.div`
position: absolute;
right: 10px;
border-radius: 0 0 5px 5px;
top: 80px;
transition: 0.2s all ease-in-out;
width: max-content;
padding: 15px;
background-color: ${colors.darkPurple};
z-index: 5;
`