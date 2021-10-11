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
padding: 0 150px;
`

export const Section = styled.section``

export const List = styled.ul`
list-style: none;
display: flex;
align-items: center;
`

export const Item = styled.li`
margin: 0 25px;
`

export const Link = styled(NavbarLink)`
text-decoration: none;
color: ${colors.white};
transition: all 0.2s ease-in-out;


&:hover{
    color: ${colors.orange};
}
`