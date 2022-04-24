import styled from "styled-components";
import colors from "constans/colors"
export const Container = styled.form`
width: 70%;
margin: 0 auto;
flex-direction: column;
row-gap: 10px;

@media screen and (max-width: 700px) {
    width: 90%;
}
`

export const ErrorMessage = styled.p`
font-size: 12px;
color: ${colors.red};
margin: 0;
`
export const ButtonWrapper = styled.div`
margin-top: 25px;
`
