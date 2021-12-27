import styled, {css} from "styled-components";
import colors from "constans/colors"

const FlexCenterColumn = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Question = styled.h2`
font-size: 24px;
color: ${colors.white};
background-color: ${colors.darkestPurple};
width: 100%;
text-align: center;
padding: 10px;
box-sizing: border-box;
margin: 0;

`

export const SummaryList = styled.ul`
list-style: none;
margin: 50px 0;
${FlexCenterColumn};
width: 50%;
box-sizing: border-box;
padding: 0;
`

export const SummaryItem = styled.li`
${FlexCenterColumn};
width: 100%;
margin-bottom: 50px;
background-color: ${colors.darkPurple};
padding: 20px;
`

export const AnswersContainer = styled.div`
width: 100%;
text-align: center;
gap: 10px;
display: flex;
flex-direction: column;
`

export const Answer = styled.p`
// two background colors are required to change red color to green
// if user answer is correct answer 
background-color: ${props => props.userAnswer ? colors.red : colors.mediumDarkPurple};
background-color: ${props => props.isCorrect ? colors.hoverLightGreen : ''};
padding: 10px 25px;
margin: 0;
color: ${colors.white};
font-size: 20px;
`

const InstructionsText = css`
text-align: center;
color: ${colors.white};

`

export const InstructionsHeader = styled.h1`
font-size: 35px;
letter-spacing: 1px;
margin-bottom: 0;
${InstructionsText};
@media screen and (max-width: 650px) {
font-size: 25px;
}
`

export const SummaryInstructions = styled.div`
width: 60%;
`
export const InstructionsSubheader = styled.h3`
${InstructionsText};
opacity: 0.9;
font-size: 25px;
`
export const InstructionsDescription = styled.p`
${InstructionsText};
opacity: 0.8;
`

export const HighlightText = styled.span`
color: ${colors.orange};
font-size: 35px;
`

export const CorrectColor = styled.span`
color: ${colors.lightGreen};
`

export const WrongColor = styled.span`
color: ${colors.red};
`