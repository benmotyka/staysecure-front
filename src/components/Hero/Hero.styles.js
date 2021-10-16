import styled, {css} from "styled-components";
import colors from "constans/colors.js"
import backgroundImage from './Background.png'
export const Container = styled.div`
background-image: url(${backgroundImage});
width: 100%;
height: 500px;
background-repeat: no-repeat;
background-size: cover;
background-position: 0 70%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Text = css`
color: ${colors.white};
`
export const Header = styled.h1`
${Text};
font-size: 33px;
letter-spacing: 1px;
margin-bottom: 0;
text-align: center;

@media screen and (max-width: 650px) {
font-size: 25px;
}
`
export const SubheaderContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
margin-bottom: 70px;
`
export const Subheader = styled.h3`
${Text};
font-size: 18px;
`