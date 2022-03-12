import {
  SummaryList,
  SummaryItem,
  Question,
  AnswersContainer,
  Answer,
} from "./QuizSummary.styles";

const QuizSummaryWidget = (props) => {
  console.log(props.userAnswers);
  console.log(props.summaryData);
  return (
    <SummaryList>
      {props.summaryData.map((item, index) => (
        <SummaryItem key={index}>
          <Question>{item.question[props.language]}</Question>
          <AnswersContainer>
            {item.answers.map((itemAnswer) => (
                // uber complicated, but due to the current structure 
                // of quizes and languages can't be done easier
              <Answer
                userAnswer={Object.values(
                  props.userAnswers.find((answer) =>
                    Object.values(answer.question).every((record) =>
                      Object.values(item.question).includes(record)
                    )
                  )?.answer.text
                ).every((item) => Object.values(itemAnswer.text).includes(item))}
                isCorrect={itemAnswer.isCorrect}
              >
                {itemAnswer.text[props.language]}
              </Answer>
            ))}
          </AnswersContainer>
        </SummaryItem>
      ))}
    </SummaryList>
  );
};

export default QuizSummaryWidget;
