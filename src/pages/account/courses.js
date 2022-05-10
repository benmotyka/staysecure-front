import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import { logout } from "features/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Account/Sidebar/Sidebar";
import StartedCoursesCard from "components/Account/Cards/StartedCourses";
import { PageAccount, PageSection } from "components/Pages/Pages.styles";
import NavbarClean from "components/Navbar/NavbarClean";
import ExpandItems from "components/Account/Cards/ExpandItems";
import { useTranslation } from "react-i18next";
import ListItem from "components/Account/Cards/Parts/ListItem";
import LocalLoader from "components/Loader/LocalLoader";
import { useRecoilState } from "recoil";
import { accountCourses } from "store/state/cache";
const Courses = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [startedLang, setStartedLang] = useState(i18n.language);

  const [coursesFinished, setCoursesFinished] = useState([]);
  const [coursesStarted, setCoursesStarted] = useState([]);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    if (!user) history.push("/login");
    (async function () {
      await getUserInfo();
    })();
  }, []);

  const [cachedItems, setCachedItems] = useRecoilState(accountCourses);

  const user = useSelector(selectUser);

  const getUserInfo = async () => {
    try {
      if (cachedItems?.started && cachedItems?.finished) {
          setCoursesStarted(cachedItems.started)
          return setCoursesFinished(cachedItems.finished)
      }
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
      setCoursesStarted(getUserInfo.coursesStarted);
      setCachedItems({
        started: getUserInfo.coursesStarted,
        finished: getUserInfo.coursesFinished,
      })
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
                <LocalLoader />
              ) : (
                <>
                  <StartedCoursesCard coursesStarted={coursesStarted} />
                  {coursesFinished.length ? (
                    <ExpandItems
                      header={t("finishedCourses")}
                    >
                      {coursesFinished &&
                        coursesFinished.map((course, index) => (
                          <ListItem
                          green
                          key={index}
                          header={course.header[startedLang]}
                          description={course.description[startedLang]}
                          buttonText={t('restartCourse')}
                          buttonLink={`/course/${course.link}`}
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

export default Courses;
