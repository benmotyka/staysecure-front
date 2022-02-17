import styled from "styled-components";
import colors from "constans/colors";
import { FaUser as UserIcon, FaServer as ServerIcon } from "react-icons/fa";

import { HiOutlineArrowNarrowDown as ArrowIcon } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max(49%, 500px) 2% max(49%, 500px);
  grid-template-rows: 1fr;
  padding: 25px 0;
`;

export const VerticalLine = styled.hr`
  width: 0;
  height: 100%;
  opacity: 10%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

const User = styled(UserIcon)`
  font-size: 45px;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
  position: absolute;
`;

const ContentRelativeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Arrow = styled(ArrowIcon)`
  font-size: 30px;
  margin: 0 30px;
  position: absolute;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
`;

const Server = styled(ServerIcon)`
  font-size: 60px;
  position: absolute;
  color: ${colors.white};
`;
export const Header = styled.h4`
  color: ${colors.orange};
  font-size: 25px;
  margin-bottom: 0;
  text-align: center;
`;

export const Ip = styled.p`
  font-size: 12px;
  color: ${colors.white};
  position: absolute;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
  font-weight: bold;
`;

// @TODO change relative containers to contain user arrow and ip altogether
// @TODO needs hard refactor

const DosVsDdos = () => {
  return (
    <Container>
      <BodyWrapper>
        <ContentWrapper>
          <Header>Denial of Service</Header>
          <ContentRelativeWrapper>
            <Server style={{ left: "220px" }} />
            <Arrow
              style={{
                left: "150px",
                top: "195px",
                transform: "rotate(315deg)",
              }}
            />
            <User style={{ left: "135px", top: "130px" }} />
            <Ip style={{ left: "125px", top: "165px" }}>4.62.215.152</Ip>

            <Arrow
              style={{
                left: "150px",
                top: "295px",
                transform: "rotate(225deg)",
              }}
            />
            <User style={{ left: "135px", top: "315px" }} />
            <Ip style={{ left: "120px", top: "350px" }}>131.171.232.242</Ip>

            <User bad style={{ left: "370px", top: "160px" }} />
            <Ip bad style={{ left: "345px", top: "195px" }}>
              254.240.232.165
            </Ip>
            <Arrow
              bad
              style={{
                left: "280px",
                top: "210px",
                transform: "rotate(60deg)",
              }}
            />
            <Arrow
              bad
              style={{
                left: "280px",
                top: "220px",
                transform: "rotate(60deg)",
              }}
            />
            <Arrow
              bad
              style={{
                left: "280px",
                top: "200px",
                transform: "rotate(60deg)",
              }}
            />
          </ContentRelativeWrapper>
        </ContentWrapper>
        <VerticalLine />
        <ContentWrapper>
          <Header>Distributed Denial of Service</Header>
          <ContentRelativeWrapper>
            <Server style={{ left: "220px" }} />

            <Arrow
              style={{
                left: "150px",
                top: "195px",
                transform: "rotate(315deg)",
              }}
            />
            <User style={{ left: "135px", top: "130px" }} />
            <Ip style={{ left: "125px", top: "165px" }}>4.62.215.152</Ip>

            <Arrow
              style={{
                left: "150px",
                top: "295px",
                transform: "rotate(225deg)",
              }}
            />
            <User style={{ left: "135px", top: "315px" }} />
            <Ip style={{ left: "120px", top: "350px" }}>131.171.232.242</Ip>

            <User bad style={{ left: "370px", top: "160px" }} />
            <Ip bad style={{ left: "350px", top: "195px" }}>
              254.240.232.165
            </Ip>
            <Arrow
              bad
              style={{
                left: "275px",
                top: "210px",
                transform: "rotate(60deg)",
              }}
            />

            <User bad style={{ left: "360px", top: "240px" }} />
            <Ip bad style={{ left: "350px", top: "275px" }}>
              168.100.217.13
            </Ip>
            <Arrow
              bad
              style={{
                left: "280px",
                top: "250px",
                transform: "rotate(90deg)",
              }}
            />

            <User bad style={{ left: "340px", top: "320px" }} />
            <Ip bad style={{ left: "325px", top: "355px" }}>
            94.203.80.107
            </Ip>
            <Arrow
              bad
              style={{
                left: "270px",
                top: "310px",
                transform: "rotate(135deg)",
              }}
            />

          </ContentRelativeWrapper>
        </ContentWrapper>
      </BodyWrapper>
    </Container>
  );
};

export default DosVsDdos;
