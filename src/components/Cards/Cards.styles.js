import styled, {css} from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
width: 30%;
background-color: ${colors.darkPurple};
margin-top: 30px;
padding: 40px;
display: flex;
flex-direction: column;
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
`
export const Label = styled.label`
${Text};
margin-left: 15px;
`

export const Wrapper = styled.div`
margin-bottom: 20px;
`