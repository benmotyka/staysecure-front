import { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Container, Header, HeaderContainer, ExpandArrow, Wrapper } from "./Cards.styles";
import CourseFinished from "./Parts/CourseFinished";

const FinishedCourses = () => {
  const history = useHistory();

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
      <CourseFinished header="Backdoor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"/>      <CourseFinished header="Backdoor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"/>
      </Wrapper>
    </Container>
  );
};

export default FinishedCourses;
