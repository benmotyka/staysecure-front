import {SummaryList, SummaryItem, Question, AnswersContainer, Answer} from "./QuizSummary.styles"

const QuizSummaryWidget = (props) => {
    return (
            <SummaryList>
            {props.summaryData.map((item, index) => (
                <SummaryItem key={index}>
                    <Question>{item.question[props.language]}</Question>
                    <AnswersContainer>
                    {item.answers.map(itemAnswer => (
                        <Answer userAnswer={(props.userAnswers.find(answer => answer.question[props.language] === item.question[props.language]))?.answer.text[props.language] === itemAnswer.text[props.language]} isCorrect={itemAnswer.isCorrect} >{itemAnswer.text[props.language]}</Answer>
                    ))}
                    </AnswersContainer>
                </SummaryItem>
            ))}
            </SummaryList>
    )
}

export default QuizSummaryWidget
