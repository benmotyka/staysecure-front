import Browser from "components/Browser/Browser";
import Loader from "components/Loader/GlobalLoader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("Jan Kowalski");
  const [urlQuery, setUrlQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [randomInt, setRandomInt] = useState(0)

  const searchFriend = () => {
    if (!searchValue) return;
    if(searchValue.match(/<.*>.*<\/.*>/gm)) {
      props.setWaitForCorrectAnswer(false);
      setRandomInt(0)
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
                  <SectionHeader>{t("courses.xss.friends")}</SectionHeader>
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
                <SectionHeader>{t("courses.xss.searchFriends")}</SectionHeader>
              </HeaderItem>
              <ItemWrapper>
                <input
                  type="text"
                  placeholder={t("courses.xss.enterFriend")}
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button onClick={searchFriend}>{t("courses.xss.search")}</button>
              </ItemWrapper>
              <FriendList>
              {searchedValue && (
                  <>
                  <ItemWrapper>
                  {t("courses.xss.searchResultsFor")}:<br/>
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
                  <SectionHeader>{t("courses.xss.myProfile")}</SectionHeader>
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
