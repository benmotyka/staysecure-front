import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 3px 3px 0 0;
  width: 100%;
  height: 90%;

  &:before {
  display: block;
  position: absolute;
  content: '';
  top: -1.25em;
  left: 1em;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #f44;
  box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
  }

  &:after {
    display: block;
  position: absolute;
  content: '';
  top: -2em;
  left: 5.5em;
  width: 20%;
  height: 0em;
  border-bottom: 2em solid white;
  border-left: 0.8em solid transparent;
  border-right: 0.8em solid transparent;
  }
`

const Body = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`

const Browser = (props) => {
    return (
<Container>
    <Body>
 {props.children}
 </Body>
</Container>
    )
}

export default Browser
