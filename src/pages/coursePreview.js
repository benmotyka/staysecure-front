import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import coursesData from "components/Courses/course.data";
import { PageOneItemCentered } from "components/Pages/Pages.styles";
import CoursePreviewWidget from "components/CoursePreview/CoursePreview";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LocalLoader from "components/Loader/LocalLoader";
import { Helmet } from "react-helmet";

const CoursePreview = (props) => {
  const courseName = props.match.params.courseName;
  const { t, i18n } = useTranslation();
  const localStorageLang = i18n.language;
  const history = useHistory();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courseRating, setCourseRating] = useState(null);

  useEffect(() => {
    const courseData = coursesData.find(
      (item) => item.course === courseName && item.language === localStorageLang
    );
    if (!courseData) {
      history.push("/courses");
      return;
    }
    setContent(courseData);
    (async () => {
      await getCourseRatings();
    })();
  }, []);

  const getCourseRatings = async () => {
    const requestBody = {
      query: `
    query GetCourseRating($courseLink: String!){
      getCourseRating(courseLink: $courseLink){
        averageRate
        votes
        comments {
          username
          comment
          createdAt
        }
        }
      }
          `,
      variables: {
        courseLink: courseName,
      },
    };

    try {
      const { data } = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody
      );
      setCourseRating(data.data.getCourseRating);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.courses")}</title>
      </Helmet>
      <Navbar />
      <PageOneItemCentered>
        {loading ? (
          <LocalLoader />
        ) : (
          <CoursePreviewWidget
            courseData={content}
            courseRating={courseRating}
          />
        )}
      </PageOneItemCentered>
      <Footer />
    </>
  );
};

export default CoursePreview;
