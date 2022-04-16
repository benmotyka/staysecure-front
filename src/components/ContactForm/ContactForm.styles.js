import styled from "styled-components";
import colors from "constans/colors"
import { faqInputStyles } from "components/Faq/Faq.styles";

export const Container = styled.form`
width: 70%;
margin: 0 auto;
flex-direction: column;
row-gap: 10px;
`

export const ErrorMessage = styled.p`
font-size: 12px;
color: ${colors.red};
margin: 0 0 0 5px;
position: absolute;
`

export const FormContent = styled.textarea`
${faqInputStyles};
font-family: inherit;
resize: none;
min-height: 150px;
`

export const InputWrapper = styled.div`
margin-bottom: 25px;
`