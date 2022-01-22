import styled from "styled-components";

const Container = styled.div`
  border-top: 2em solid #fff;
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 3px 3px 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &:before {
    display: block;
    position: absolute;
    content: "";
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
    content: "";
    top: -2em;
    left: 5.5em;
    width: 20%;
    height: 0em;
    border-bottom: 2em solid #AEAFB7;
    border-left: 0.8em solid transparent;
    border-right: 0.8em solid transparent;
  }
`;

const Body = styled.div`
  background-color: white;
  height: calc(100% - 46px);
  width: 100%;
  position: relative;
`;

const UrlContainer = styled.div`
  width: 100%;
  background-color: #AEAFB7;
  padding: 10px 100px;
  box-sizing: border-box;
  height: 46px;
`;

const UrlInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 15px;
`;

const Browser = (props) => {
  return (
    <Container>
      <UrlContainer>
        <UrlInput type="text" value={props.urlValue ? props.urlValue : 'https://staysecure.pl'} readOnly="true"/>
      </UrlContainer>
      <Body>{props.children}</Body>
    </Container>
  );
};

export default Browser;
