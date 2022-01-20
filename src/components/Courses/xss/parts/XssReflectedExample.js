import Browser from "components/Browser/Browser";
import Loader from "components/Loader/Loader";
import colors from "constans/colors";
import { useState } from "react";
import styled, { css } from "styled-components";
import { RiUserFill as UserIcon } from "react-icons/ri";

export const BrowserContainer = styled.div`
  width: 100%;
  height: 90%;
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

export const User = styled(UserIcon)`
  font-size: 35px;
  background-color: ${(props) => (props.orange ? colors.orange : colors.darkPurple)};
  border-radius: 50%;
  color: ${colors.white};
  padding: 10px;
`;

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const FriendItem = styled.li`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.darkPurple};
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  padding: 0 15px;
`;

export const HeaderItem = styled(FriendItem)`
  display: flex;
`;

export const SectionHeader = styled.h3`
  font-size: 25px;
  text-align: center;
  width: 100%;
  margin: 15px 0;
`;

export const UserData = styled.div`
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
`;

export const FakeData = styled.div`
  padding: 7px 4px;
  border-radius: 15px;
  opacity: 0.7;
  width: 20px;
  width: ${(props) => (props.short ? "30%" : "65%")};
  background-color: ${(props) => (props.orange ? colors.orange : colors.darkPurple)};
`;

export const BodyWrapper = styled.div`
padding: 15px;
`

const XssReflectedExample = () => {
  const [searchValue, setSearchValue] = useState("");
  const [urlQuery, setUrlQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

  const searchFriend = () => {
    if (!searchValue) return;
    setLoading(true);
    setSearchedValue(searchValue);
    setUrlQuery(`?q=${searchValue.replaceAll(" ", "+")}`);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
                {[...Array(8)].map((n, index) => (
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
              <BodyWrapper>
              <div>
                <input
                  type="text"
                  placeholder="Wpisz znajomego..."
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button onClick={searchFriend}>Wyszukaj</button>
              </div>
              {searchedValue && (
                <div>
                  <h3>
                    Wyniki wyszukiwania dla:{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: searchedValue }}
                    ></span>
                  </h3>
                </div>
              )}
              </BodyWrapper>
            </PageSection>
            <PageSection>
              <FriendList>
                <HeaderItem>
                  <SectionHeader>Mój profil</SectionHeader>
                </HeaderItem>
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

export default XssReflectedExample;
