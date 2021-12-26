import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import Navbar from "components/Navbar/Navbar";
import { PageWrapper } from "components/Pages/Pages.styles";
import {Line} from "components/PreviewItems/PreviewItems.styles"

import {
  InstructionsHeader,
  SummaryInstructions,
  InstructionsSubheader,
  InstructionsDescription,
  HighlightText,
  CorrectColor,
  WrongColor
} from "components/QuizSummary/QuizSummary.styles";
import QuizSummaryWidget from "components/QuizSummary/QuizSummary";
import { useTranslation } from "react-i18next";

const QuizSummary = (props) => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [summaryData, setSummaryData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const {t} = useTranslation()

  useEffect(() => {
    (async () => {
      if (!user) history.push("/login");
      await getSummaryData();
    })();
  }, []);

  const getSummaryData = async () => {
    setLoading(true);
    const requestBody = {
      query: `
    query GetQuizSummaryData($courseLink: String!){
      getQuizSummaryData(courseLink: $courseLink){
        userAnswers
        scorePercentage
        quizData {
          question
          answers {
            text
            isCorrect
          }
        }
        }
      }
          `,
      variables: {
        courseLink: props.match.params.courseName,
      },
    };

    try {
      const { data: response } = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.errors) {
        history.push(`/`);
      }
      setUserAnswers(JSON.parse(response.data.getQuizSummaryData.userAnswers));
      setSummaryData(response.data.getQuizSummaryData.quizData);
      setUserScore(response.data.getQuizSummaryData.scorePercentage);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageWrapper>
            <SummaryInstructions>
              <InstructionsHeader>
              {t('quiz.summary')} {props.match.params.courseName}
              </InstructionsHeader>
              <InstructionsSubheader>
                {t('quiz.yourScoreIs')}: <HighlightText>{userScore * 100}%</HighlightText>
              </InstructionsSubheader>
              <InstructionsDescription>
              {t('quiz.color')} <CorrectColor>{t('quiz.green')}</CorrectColor> {t('quiz.meansCorrectAnswerAnd')} <WrongColor>{t('quiz.red')}</WrongColor> {t('quiz.possibleBadAnswer')}
              </InstructionsDescription>
            <Line/>
            </SummaryInstructions>
            <QuizSummaryWidget
              quizName={props.match.params.courseName}
              userAnswers={userAnswers}
              summaryData={summaryData}
              userScore={userScore}
            />
          </PageWrapper>
        </>
      )}
    </>
  );
};

export default QuizSummary;
