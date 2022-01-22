import Browser from "components/Browser/Browser";
import Loader from "components/Loader/Loader";
import { useState, useEffect } from "react";

import {
  BrowserContainer,
  PageWrapper,
  PageSection,
  User,
  FriendList,
  FriendItem,
  HeaderItem,
  SectionHeader,
  UserData,
  FakeData,
  ItemWrapper
} from '../styles.js'


const XssInteractiveEnterHtml = (props) => {
    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
        searchFriend();
      }, []);

      
  const [searchValue, setSearchValue] = useState("<marquee>Podatność XSS</marquee>");
  const [urlQuery, setUrlQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [randomInt, setRandomInt] = useState(0)

  const searchFriend = () => {
    if (!searchValue) return;
    if(searchValue.match(/<.*>.*<\/.*>/gm)) {
      setRandomInt(0)
      if (searchValue.match(/<script>alert\(.*\)<\/script>/gmi)) {
          try {
            props.setWaitForCorrectAnswer(false);
            const scriptContent = searchValue.match(/\(.*\)/i)[0]
            const alertContent = scriptContent.replace(/[()]|'/g,'');
            alert(alertContent)  
          } catch (error) {
              console.log(error)
          }
        }
    } else {
      setRandomInt(Math.floor(Math.random() * 6))
    }
    setLoading(true);
    setSearchedValue(searchValue);
    setUrlQuery(`?q=${searchValue.replaceAll(" ", "+")}`);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  return (
    <BrowserContainer>
      <Browser
        urlValue={"http://wyszukiwarka-znajomych.pl/wyszukiwanie" + urlQuery}
      >
        {loading ? (
          <Loader />
        ) : (
          <PageWrapper>
            <PageSection>
              <FriendList>
                <HeaderItem>
                  <SectionHeader>Znajomi</SectionHeader>
                </HeaderItem>
                {[...Array(9)].map((n, index) => (
                <FriendItem key={index}>
                <User />
                <UserData>
                  <FakeData short />
                  <FakeData />
                </UserData>
              </FriendItem>
                ))}
              </FriendList>
            </PageSection>
            <PageSection withBorders>
              <HeaderItem>
                <SectionHeader>Wyszukiwarka znajomych</SectionHeader>
              </HeaderItem>
              <ItemWrapper>
                <input
                  type="text"
                  placeholder="Wpisz znajomego..."
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button onClick={searchFriend}>Wyszukaj</button>
              </ItemWrapper>
              <FriendList>
              {searchedValue && (
                  <>
                  <ItemWrapper>
                    Wyniki wyszukiwania dla:<br/>
                    <strong
                      dangerouslySetInnerHTML={{ __html: searchedValue }}
                    ></strong>
                    </ItemWrapper>
                  {[...Array(randomInt)].map((n, index) => (
                <FriendItem key={index}>
                <User />
                <UserData>
                  <FakeData short />
                  <FakeData />
                </UserData>
                </FriendItem>
                ))}
                </>
                )}
            </FriendList>
            </PageSection>
            <PageSection>
                <HeaderItem>
                  <SectionHeader>Mój profil</SectionHeader>
                </HeaderItem>
              <FriendList>
                <FriendItem>
                  <User orange />
                  <UserData>
                    <FakeData orange short />
                    <FakeData orange />
                  </UserData>
                </FriendItem>
              </FriendList>
            </PageSection>
          </PageWrapper>
        )}
      </Browser>
    </BrowserContainer>
  );
};

export default XssInteractiveEnterHtml;
