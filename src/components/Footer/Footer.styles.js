import styled from "styled-components";
import colors from "constans/colors"
import {Link as FooterLink} from "react-router-dom"

export const Container = styled.div`
height: 80px;
display: flex;
bottom: 0;
align-items: center;
justify-content: space-between;
padding: 0 270px;
background-color: ${props => props.noBackground ? "none": colors.darkPurple};
`

export const Section = styled.section`
display: flex;
`

export const Text = styled.p`
opacity: 0.7;
margin: 0 15px;
font-size: 16px;
color: ${colors.white};
`

export const Link = styled(FooterLink)`
text-decoration: none;
color: ${colors.orange};
font-weight: bold;
`