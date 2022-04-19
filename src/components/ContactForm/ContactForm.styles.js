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
margin: 0;
`

export const FormContent = styled.textarea`
${faqInputStyles};
font-family: inherit;
resize: none;
min-height: 150px;
margin: 15px 0;
`

export const ButtonWrapper = styled.div`
margin-top: 25px;
`
