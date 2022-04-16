import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import { logout } from "features/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Account/Sidebar/Sidebar";
import { PageAccount, PageSection } from "components/Pages/Pages.styles";
import NavbarClean from "components/Navbar/NavbarClean";
import Loader from "components/Loader/GlobalLoader";
import { useTranslation } from "react-i18next";
import ExpandItems from "components/Account/Cards/ExpandItems";
import ListItem from "components/Account/Cards/Parts/ListItem";
import OverallQuizSummary from "components/Account/Cards/Parts/OverallQuizSummary";
import Scale from "components/Charts/Scale";
const Quizes = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [language] = useState(i18n.language);

  const [quizesFinished, setQuizesFinished] = useState([]);
  const [overallChartData, setOverallChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) history.push("/login");
    (async function () {
      await getOverallQuizesData();
    })();
  }, []);

  const user = useSelector(selectUser);

  const getOverallQuizesData = async () => {
    try {
      const requestBody = {
        query: `
        query {
          getOverallQuizesData {
            overallScore {
              value
            }
            finishedQuizes {
              scorePercentage
              header {
                ${language}
              }
              link
            }
          }
        }
      `,
      };
      const {
        data: {
          data: { getOverallQuizesData },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
        setOverallChartData(getOverallQuizesData.overallScore);
        setQuizesFinished(getOverallQuizesData.finishedQuizes);
    } catch (error) {
      console.log(error);
      if (
        error.response ||
        (error.response.data.errors.length &&
          error.response.data.errors[0].message === "unauthenticated")
      ) {
        dispatch(logout());
        history.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {user && (
        <>
          <NavbarClean />
          <PageAccount>
            <Sidebar />
            <PageSection>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {overallChartData ? (
                    <OverallQuizSummary chartData={overallChartData} />
                  ) : null}
                  {JSON.stringify()}
                  {quizesFinished && quizesFinished.length ? (
                    <ExpandItems header={t("quizesDetails")}>
                      {quizesFinished.map((quiz, index) => (
                        <ListItem
                          green
                          key={index}
                          header={quiz.header[language]}
                          buttonText={t("quizSummary")}
                          buttonLink={`/quiz-summary/${quiz.link}`}
                        >
                          <Scale scorePercentage={quiz.scorePercentage} />
                        </ListItem>
                      ))}
                    </ExpandItems>
                  ) : null}
                </>
              )}
            </PageSection>
          </PageAccount>
          <Footer />
        </>
      )}
    </>
  );
};

export default Quizes;
