import { useState, useRef, useEffect } from "react"
import { Container, Header, HeaderContainer, ExpandArrow, Wrapper } from "./Cards.styles";
import CourseFinished from "./Parts/CourseFinished";

const FinishedCourses = (props) => {

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
        <Header>Ukończone kursy</Header>
        <ExpandArrow rotate={expanded} onClick={() => {
          setExpanded(!expanded)
        }}/>
      </HeaderContainer>
      <Wrapper ref={contentRef} >
        {props.coursesFinished && props.coursesFinished.map(course => (
      <CourseFinished header={course.header} description={course.description} linkToQuiz={course.link}/>  
        ))}
      </Wrapper>
    </Container>
  );
};

export default FinishedCourses;
