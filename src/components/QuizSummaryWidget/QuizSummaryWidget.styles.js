import styled, {css} from "styled-components";
import colors from "constans/colors"

const FlexCenterColumn = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const SummaryList = styled.ul`
list-style: none;
margin: 0;
${FlexCenterColumn};
`

export const SummaryItem = styled.li`
${FlexCenterColumn};
`

export const Question = styled.h2`
font-size: 18px;
color: ${colors.white};
`

export const AnswersContainer = styled.div`

`

export const Answer = styled.p`
// two background colors are required to change red color to green
// if user answer is correct answer 
background-color: ${props => props.userAnswer ? `red` : ''};
background-color: ${props => props.isCorrect ? `green` : ''};
padding: 10px 25px;
border-radius: 10px;
`