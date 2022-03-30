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
import Loader from "components/Loader/Loader";
import { useTranslation } from "react-i18next";
import ExpandItems from "components/Account/Cards/ExpandItems";
import CourseFinished from "components/Account/Cards/Parts/CourseFinished";
const Quizes = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [startedLang] = useState(i18n.language);

  const [coursesFinished, setCoursesFinished] = useState([]);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    if (!user) history.push("/login");
    (async function () {
      await getUserInfo();
    })();
  }, []);

  const user = useSelector(selectUser);

  const getUserInfo = async () => {
    try {
      const requestBody = {
        query: `
        query {
          getUserInfo {
            email
            coursesFinished {
              link
              header {
                ${startedLang}
              }
              description {
                ${startedLang}
              }
            }
            coursesStarted {
              link
              header {
                ${startedLang}
              }
              description {
                ${startedLang}
              }
            }
          }
          }
      `,
      };

      const {
        data: {
          data: { getUserInfo },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCoursesFinished(getUserInfo.coursesFinished);
    } catch (error) {
      if (
        error.response ||
        (error.response.data.errors.length &&
          error.response.data.errors[0].message === "unauthenticated")
      )
        dispatch(logout());
      history.push("/login");
      console.log(error);
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
                  {coursesFinished.length ? (
                    <ExpandItems
                    coursesFinished={coursesFinished}
                    header={t("quizesDetails")}
                  >
                    {coursesFinished &&
                      coursesFinished.map((course, index) => (
                        <CourseFinished
                          header={course.header[startedLang]}
                          key={index}
                          description={course.description[startedLang]}
                          linkToQuiz={course.link}
                        />
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
