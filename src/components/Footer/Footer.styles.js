import styled, {css} from "styled-components";
import colors from "constans/colors"
import {Link as FooterLink} from "react-router-dom"

export const footerHeight = "80px";

export const Container = styled.div`
height: ${footerHeight};
display: flex;
bottom: 0;
align-items: center;
justify-content: ${props => props.oneItem ? "center": "space-between"};
padding: 0 270px;
background-color: ${props => props.noBackground ? "none": colors.darkPurple};

@media screen and (max-width: 1000px) {
    padding: 0 25px;
}

@media screen and (max-width: 650px) {
    flex-direction: column;
height: auto;
}
`

export const Section = styled.section`
display: flex;
@media screen and (max-width: 650px) {
    padding: 0 25px;
    width: 50%;
    flex-direction: column;
    align-items: center;
}
`

const Text = css`
opacity: 0.7;
margin: 0 15px;
font-size: 16px;
color: ${colors.white};
text-align: center;

@media screen and (max-width: 650px) {
    margin: 5px 0;
}
`
export const TextItem = styled.p`
${Text};
min-width: max-content;
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