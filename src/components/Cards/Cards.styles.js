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