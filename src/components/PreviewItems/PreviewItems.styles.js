import styled from "styled-components";
import colors from "constans/colors"

export const Wrapper = styled.div`
width: 100%;
display: flex; 
justify-content: center;
`

export const Container = styled.div`
width: 100%;
margin-bottom: 80px;
    padding: 25px;
max-width: 1200px;
@media screen and (max-width: 600px){
    margin-bottom: 20px;
    padding: 15px;
}
`
export const Header = styled.h2`
color: ${colors.white};
font-size: 26px;
margin: 0;
width: 100%;
`
export const Line = styled.hr`
margin: 35px 0;
opacity: 10%;
`

export const ItemsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 33.3%);

@media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
}
`