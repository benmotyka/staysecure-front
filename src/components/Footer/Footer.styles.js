import styled from "styled-components";
import colors from "constans/colors"
export const Container = styled.div`
height: 80px;
display: flex;
bottom: 0;
align-items: center;
justify-content: space-between;
padding: 0 150px;
background-color: ${colors.darkPurple};
`

export const Section = styled.section`
display: flex;
`

export const Text = styled.p`
opacity: 0.7;
margin: 0 15px;
font-size: 16px;
color: ${colors.white};
`