import styled from "styled-components";
import colors  from "constans/colors";

export const Container = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: rgba(33, 36, 57,0.8);
z-index: 1000;
display: flex;
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 15px;
padding: 25px;
width: 400px;
height: 200px;
background-color: ${colors.mediumDarkPurple};
opacity: 1;
`

export const Header = styled.h2`
margin: 0;
color: ${colors.white};
`
export const Text = styled.p`
margin-top: 0;
color: ${colors.white};
opacity: 0.8;
font-size: 20px;
`
export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`