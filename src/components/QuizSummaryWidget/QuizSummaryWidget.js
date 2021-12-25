import { useEffect, useState } from "react";

const QuizSummaryWidget = (props) => {
    return (
        <div>
            {JSON.stringify(props.summaryData)}
            <br></br>
            {JSON.stringify(props.userAnswers)}
        </div>
    )
}

export default QuizSummaryWidget
