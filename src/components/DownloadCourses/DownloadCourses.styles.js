import styled from "styled-components";
import colors from "constans/colors";

export const Container = styled.div`
position: absolute;
right: 0;
bottom: 0;
width: 250px;
height: 80px;
border-radius: 5px;
opacity: 0.4;
border: 1px solid ${colors.gold};
padding: 15px 25px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: 0.2s all ease-in-out;
text-transform: uppercase;
color: ${colors.gold};
font-size: 24px;
&:hover{
    opacity: 0.8;
}
`

export const SlidesWrapper = styled.div`
display: none;
`

export const Slide = styled.div`
background-color: red;
`