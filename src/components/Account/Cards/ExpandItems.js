import { useState, useRef, useEffect } from "react"
import { Container, Header, HeaderContainer, ExpandArrow, Wrapper } from "./Cards.styles";

const ExpandItems = (props) => {

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
        <Header>{props.header}</Header>
        <ExpandArrow rotate={expanded ? "true" : undefined} onClick={() => {
          setExpanded(!expanded)
        }}/>
      </HeaderContainer>
      <Wrapper ref={contentRef} >
        {props.children}
      </Wrapper>
    </Container>
  );
};

export default ExpandItems;
