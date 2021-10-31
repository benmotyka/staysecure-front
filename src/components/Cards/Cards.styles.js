import styled, {css} from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
width: 30%;
background-color: ${colors.darkPurple};
margin-top: 30px;
padding: 40px;
display: flex;
flex-direction: column;
@media screen and (max-width: 1000px) {
padding: 20px;
width: auto;
align-items: center;
}
`
export const Header = styled.h2`
color: ${colors.white};
font-size: 27px;
margin: 0;
`

const Text = css`
font-size: 18px;
color: ${colors.white};
`
export const Input = styled.input`
${Text};
margin: 15px 0;
padding: 15px 25px;
background: none;
border: 1px solid ${colors.white};
outline: none;
@media screen and (max-width: 1000px) {
padding: 8px 12px;
}
`
export const Label = styled.label`
${Text};
margin-left: 15px;
`

export const Wrapper = styled.div`
`

export const ErrorsWrapper = styled.div`
height: 40px;
position: relative;
`

export const Error = styled.p`
font-size: 15px;
color: red;
margin: 0;
`

export const SuccessText = styled.h4`
font-size: 20px;
color: ${colors.white};
text-align: center;
opacity: 0.8;
margin: 0;
`

export const AccountLevelChooserContainer = styled.div`
height: 40px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
border: 1px solid ${colors.darkestPurple};
margin-bottom: 15px;
`

export const AccountLevelButton = styled.button`
text-transform: uppercase;
border: none;
cursor: pointer;
background-color: ${props => props.active ? colors.mediumDarkPurple: "inherit"};
color: ${props => props.active ? "rgba(255,255,255,.7)": "rgba(255,255,255,.2)"};
transition: 0.2s all ease-in-out;
`