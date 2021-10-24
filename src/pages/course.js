import {useState, useEffect} from "react"
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";

import NavbarClean from "components/Navbar/NavbarClean";
import { PageCourse, TemporaryHeader } from "components/Pages/Pages.styles";
import Navigation from "components/Course/Navigation";
import Modal from 'components/Modal/Modal'

import content from "components/Courses/sqlInjection/course.data"
import Sidebar from "components/Course/Sidebar";
const Course = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/login");
  }, []);

  const user = useSelector(selectUser);

    return (
        <>
      {user && (
<>
          <NavbarClean/>
          <Sidebar data={content} activeSlide={activeSlide}/>
          <PageCourse>
            {content.map((step, index) => {
              if(index === activeSlide) return step.slide
})}
</PageCourse>

          <Navigation data={content} activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
         <Modal header="Czy chcesz zakończyć kurs?" text="Kurs kończy się quizem. Czy chcesz zakończyć kurs i przejść do quizu?" button1Text="Anuluj" button2Text="Przejdź"/>
          </>
      )}
        </>
    )
}

export default Course
