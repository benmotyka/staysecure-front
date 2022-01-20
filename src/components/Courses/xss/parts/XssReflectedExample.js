import Browser from "components/Browser/Browser";
import Loader from "components/Loader/Loader";
import colors from "constans/colors";
import { useState } from "react";
import styled, { css } from "styled-components";

export const BrowserContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  width: 100%;
  height: 100%;
`;

export const PageSection = styled.section`
  height: 100%;
  width: 100%;
  border-left: ${(props) =>
    props.withBorders ? `1px solid ${colors.grey}` : ""};
  border-right: ${(props) =>
    props.withBorders ? `1px solid ${colors.grey}` : ""};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const XssReflectedExample = () => {
  const [searchValue, setSearchValue] = useState("");
  const [urlQuery, setUrlQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const searchFriend = () => {
      if(!searchValue) return
    setLoading(true)
    setUrlQuery(`?q=${searchValue.replaceAll(' ','+')}`)
    setTimeout(() => {
        setLoading(false)
    },1000)
  }

  return (
    <BrowserContainer>
      <Browser urlValue={'http://wyszukiwarka-znajomych.pl/wyszukiwanie' + urlQuery}>
          {loading ? <Loader/> : (
        <PageWrapper>
        <PageSection></PageSection>
        <PageSection withBorders>
            <h4>Wyszukiwarka znajomych</h4>
            <div>
            <input type="text" 
            placeholder="Wpisz znajomego..."
          onChange={(e) => setSearchValue(e.target.value)}
          
            />
            <button onClick={searchFriend}>Wyszukaj</button>
            </div>
        </PageSection>
        <PageSection></PageSection>
      </PageWrapper>
          )}
      </Browser>
    </BrowserContainer>
  );
};

export default XssReflectedExample;
