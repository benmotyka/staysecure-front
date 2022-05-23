import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "components/Loader/GlobalLoader";
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
import RateCourseWidget from "components/RateCourse/RateCourse"
import { useTranslation } from "react-i18next";
import { useLogin } from "store/actions/user";

const QuizSummary = (props) => {
  const { userDetails } = useLogin()
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [quizName, setQuizName] = useState('')
  const [showRateButton, setShowRateButton] = useState(false)

  useEffect(() => {
    (async () => {
      if (!userDetails) history.push("/login");
      await getSummaryData();
    })();
  }, []);

  const getSummaryData = async () => {
    // quiz data needs to be fetched in all languages,
    // because client answers in one language are saved
    // as json, thus they are not automaticaly converted
    // to the other languages 

    const requestBody = {
      query: `
    query GetQuizSummaryData($courseLink: String!){
      getQuizSummaryData(courseLink: $courseLink){
        quizName {
          ${language}
        }
        userAnswers
        showRateButton
        scorePercentage
        quizData {
          question {
            en
            pl
          }
          answers {
            text {
              en
              pl
            }
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
            Authorization: `Bearer ${userDetails.token}`,
          },
        }
      );
      if (response.errors) {
        history.push(`/`);
      }
      const summaryData = response.data.getQuizSummaryData
      setUserAnswers(JSON.parse(summaryData.userAnswers));
      setSummaryData(summaryData.quizData);
      setUserScore(summaryData.scorePercentage);
      setQuizName(summaryData.quizName[language])
      setShowRateButton(summaryData.showRateButton)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
              {t('quiz.summary')} {quizName}
              </InstructionsHeader>
              <InstructionsSubheader>
                {t('quiz.yourScoreIs')}: <HighlightText>{userScore * 100}%</HighlightText>
              </InstructionsSubheader>
              <InstructionsDescription>
              {t('quiz.color')} <CorrectColor>{t('quiz.green')}</CorrectColor> {t('quiz.meansCorrectAnswerAnd')} <WrongColor>{t('quiz.red')}</WrongColor> {t('quiz.possibleBadAnswer')}
              </InstructionsDescription>
            <Line/>
            </SummaryInstructions>
            {showRateButton ? <RateCourseWidget setShowRateButton={setShowRateButton} courseName={props.match.params.courseName}/> : null }
            <QuizSummaryWidget
              language={language}
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
