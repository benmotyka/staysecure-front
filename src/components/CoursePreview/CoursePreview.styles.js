import styled, { css } from "styled-components";
import colors from "constans/colors";
import {
  RateLevel as Rate,
  EmptyRateLevel as EmptyRate,
} from "components/PreviewItems/Previews/Previews.styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  width: 60%;
  height: 90%;
  box-sizing: border-box;
  background-color: ${colors.mediumDarkPurple};
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  padding: 25px;
`;

export const Background = styled.div`
  background-image: ${(props) =>
    props.backgroundUrl ? `url(${props.backgroundUrl})` : ""};
  background-size: cover;
  width: 100%;
  top: 0;
  left: 0;
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 15px 45px;
  box-sizing: border-box;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Header = styled.h2`
  margin: 0;
  color: ${colors.white};
  font-size: 40px;
  opacity: 0.9;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.white};
  opacity: 0.7;
  margin: 0;
`;

export const CourseTitlesWrapper = styled.ul`
  padding-left: 25px;
`;

export const CourseTitle = styled.li`
  color: ${colors.white};
  font-size: 16px;
  opacity: 0.7;
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

export const Comment = styled.li`
  width: 100%;
  border: 1px solid ${colors.darkestPurple};
  box-sizing: border-box;
  font-size: 14px;
  color: ${colors.white};
  opacity: 0.7;
  border-top: none;
`;

export const CommentsHeader = styled.h4`
  width: 100%;
  height: 10%;
  font-size: 24px;
  text-align: center;
  background-color: ${colors.darkestPurple};
  color: ${colors.orange};
  padding: 10px 0;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  margin: auto auto 0;
`;

const Star = css`
  font-size: 35px;
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
`;

export const RateSubDescription = styled.p`
  ${GoldText};
  font-size: 12px;
  margin: 0;
`;
