import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { useHistory } from "react-router-dom";
import coursesData from "components/Courses/course.data";
import { PageOneItemCentered } from 'components/Pages/Pages.styles'
import CoursePreviewWidget from 'components/CoursePreview/CoursePreview'
import { useEffect } from 'react';
import { useState } from 'react';

const CoursePreview = (props) => {
  const courseName = props.match.params.courseName;
  const localStorageLang =  localStorage.getItem('i18nextLng')
  const history = useHistory();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const courseData = coursesData.find((item) => item.course === courseName && item.language === localStorageLang);
      if (!courseData) {
        history.push("/courses");
        return;
      }
      setContent(courseData);
  },[])

  return (
    <>
    <Navbar/>
    <PageOneItemCentered>
        <CoursePreviewWidget 
        courseData={content}
        />
    </PageOneItemCentered>
    <Footer/>
    </>
  )
}

export default CoursePreview