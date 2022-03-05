import styled, { css } from "styled-components";
import colors from "constans/colors";

export const Container = styled.li`
padding: 10px;
box-sizing: border-box;
border: 5px solid ${colors.darkPurple};
background-color: ${colors.darkestPurple};
`
export const CommentWrapper = styled.div`
padding: 5px;
`
export const Text = styled.div`
font-size: 16px;
color: ${colors.white};
opacity: 0.7;
`
export const DetailsWrapper = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Details = styled.p`
font-size: 10px;
color: ${colors.orange};
margin: 0;
`