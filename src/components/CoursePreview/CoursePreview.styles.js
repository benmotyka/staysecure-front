import styled, { css } from "styled-components";
import colors from "constans/colors";
import {
  RateLevel as Rate,
  EmptyRateLevel as EmptyRate,
} from "components/PreviewItems/Previews/Previews.styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  box-sizing: border-box;
  background-color: ${colors.mediumDarkPurple};
  border-radius: 10px;
  min-width: 850px;
  @media screen and (max-width: 1000px) {
  width: 80%;
    min-width: 320px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  padding: 45px 25px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  padding: 25px;
    gap: 25px;
  }
`;

export const Background = styled.div`
  background-image: ${(props) =>
    props.backgroundUrl ? `url(${props.backgroundUrl})` : ""};
  background-size: cover;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 15px 45px;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: 1000px) {
  padding: 15px 25px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  @media screen and (max-width: 1000px) {
  width: 100%;
  }
`;

export const Header = styled.h2`
  margin: 0;
  color: ${colors.white};
  font-size: 40px;
  opacity: 0.9;
  @media screen and (max-width: 1000px) {
  font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.white};
  opacity: 0.7;
  margin: 0;
  @media screen and (max-width: 1000px) {
  font-size: 14px;
  }
`;

export const CourseTitlesWrapper = styled.ul`
  padding-left: 25px;
  margin-bottom: 35px;
`;

export const CourseTitle = styled.li`
  color: ${colors.white};
  font-size: 16px;
  opacity: 0.7;
  @media screen and (max-width: 1000px) {
  font-size: 14px;
  }
`;

export const RateWrapper = styled.div`
  margin: 0;
  display: flex;
`;

export const ReviewWrapper = styled.div`
  position: relative;
`;

export const CommentsWrapper = styled.ul`
  position: absolute;
  top: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.darkPurple};
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.orange};
  }
`;


export const CommentsHeader = styled.h4`
  width: 100%;
  height: 10%;
  font-size: 18px;
  text-align: center;
  background-color: ${colors.darkestPurple};
  color: ${colors.white};
  margin: 0;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin: auto auto 0;
`;

const Star = css`
  font-size: 35px;

  @media screen and (max-width: 1000px) {
  font-size: 20px;
  }
`;

export const RateLevel = styled(Rate)`
  ${Star};
`;
export const EmptyRateLevel = styled(EmptyRate)`
  ${Star};
`;

const GoldText = css`
  opacity: 0.6;
  color: ${colors.gold};
  text-align: center;
`;

export const RateDescription = styled.h4`
  ${GoldText};
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 1000px) {
  font-size: 16px;
  }
`;

export const RateSubDescription = styled.p`
  ${GoldText};
  font-size: 12px;
  margin: 0;
  @media screen and (max-width: 1000px) {
  font-size: 9px;
  }
`;
