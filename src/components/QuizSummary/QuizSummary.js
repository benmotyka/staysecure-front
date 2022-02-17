import {SummaryList, SummaryItem, Question, AnswersContainer, Answer} from "./QuizSummary.styles"

const QuizSummaryWidget = (props) => {
    return (
            <SummaryList>
            {props.summaryData.map((item, index) => (
                <SummaryItem key={index}>
                    <Question>{item.question}</Question>
                    <AnswersContainer>
                    {item.answers.map(itemAnswer => (
                        <Answer userAnswer={(props.userAnswers.find(answer => answer.question === item.question))?.answer.text === itemAnswer.text} isCorrect={itemAnswer.isCorrect} >{itemAnswer.text}</Answer>
                    ))}
                    </AnswersContainer>
                </SummaryItem>
            ))}
            </SummaryList>
    )
}

export default QuizSummaryWidget
