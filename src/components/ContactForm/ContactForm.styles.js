import styled, {css} from "styled-components";
import colors from "constans/colors"
import { faqInputStyles } from "components/Faq/Faq.styles";

export const Container = styled.form`
width: 70%;
margin: 0 auto;
display: flex;
flex-direction: column;
row-gap: 10px;
`

export const ErrorMessage = styled.p`
font-size: 12px;
color: ${colors.red};
margin: 0 0 0 5px;
`

export const FormContent = styled.textarea`
${faqInputStyles};

-webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`

export const InputWrapper = styled.div`
height: 70px;
`