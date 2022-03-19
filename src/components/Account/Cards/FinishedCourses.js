import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { Container, Header, HeaderContainer, ExpandArrow, Wrapper } from "./Cards.styles";
import CourseFinished from "./Parts/CourseFinished";

const FinishedCourses = (props) => {
  const {t, i18n} = useTranslation()
  const [startedLang, setStartedLang] = useState(i18n.language)

  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = expanded
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, expanded]);


  return (
    <Container>
      <HeaderContainer>
        <Header>{t('finishedCourses')}</Header>
        <ExpandArrow rotate={expanded ? "true" : undefined} onClick={() => {
          setExpanded(!expanded)
        }}/>
      </HeaderContainer>
      <Wrapper ref={contentRef} >
        {props.coursesFinished && props.coursesFinished.map((course, index) => (
      <CourseFinished header={course.header[startedLang]} key={index} description={course.description[startedLang]} linkToQuiz={course.link}/>  
        ))}
      </Wrapper>
    </Container>
  );
};

export default FinishedCourses;
