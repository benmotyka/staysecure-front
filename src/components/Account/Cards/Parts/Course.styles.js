import styled from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
background-color: ${colors.darkPurple};
padding: 25px;
display: grid;
grid-template-columns: 1fr 1fr;
min-height: 120px;
margin-top: 35px;
@media screen and (max-width: 1000px){
    padding: 20px;
    margin-top: 15px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 150px;
}
` 

export const Section = styled.section`
margin-left: ${props => props.alignRight ? "auto": "0"};
display: ${props => props.alignRight ? "flex": "block"};
align-items: center;
@media screen and (max-width: 1000px){
margin: ${props => props.alignRight ? "0 auto": ""};
}
`
export const Header = styled.h4`
margin: 0 0 20px 0;
color: ${colors.white};
font-size: 18px;
@media screen and (max-width: 1000px) {
margin: 0 0 5px 0;
}
`
export const Description = styled.p`
color: ${colors.white};
font-size: 16px;
opacity: 0.7;
margin: 0;
`
