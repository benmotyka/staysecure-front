import styled, {css} from "styled-components";
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

@media screen and (max-width: 1000px) {
    padding: 0 130px;
}
`

export const Section = styled.section`
display: flex;
`

const Text = css`
opacity: 0.7;
margin: 0 15px;
font-size: 16px;
color: ${colors.white};
@media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const TextItem = styled.p`
${Text};
`

export const LinkItem = styled(FooterLink)`
text-decoration: none;
${Text};
opacity: ${props => props.orange ? "1": "0.7"};
transition: 0.2s all ease-in-out;
color: ${props => props.orange ? colors.orange: colors.white};
&:hover {
    color: ${colors.orange}
}
`