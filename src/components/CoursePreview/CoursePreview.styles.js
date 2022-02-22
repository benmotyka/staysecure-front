import styled, {css} from "styled-components";
import colors from "constans/colors"

export const Container = styled.div`
display: grid;
grid-template-columns: 75% 25%;
width: 100%;
height: 100%;
background-color: red;
`

export const ContentWrapper = styled.div`
background-color: yellow;
display: flex;
align-items: center;
flex-direction: column;
`

export const ReviewWrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
`

export const RateWrapper = styled.div`
margin: 0;
display: grid;
grid-template-columns: repeat(5, 1fr);
`

export const CommentsWrapper = styled.ul`
background-color: green;
list-style: none;
padding: 0;
margin: 0;
`

export const Comment = styled.li`
background-color: blue;
width: 100%;
`