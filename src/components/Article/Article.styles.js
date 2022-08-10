import styled from "styled-components";
import colors from "constans/colors";
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 80px;
  min-height: 200px;
  padding: 25px;
  display: grid;
  grid-template-columns: 65% 35%;

  @media screen and (max-width: 1000px) {
  grid-template-columns: 1fr;
  margin-bottom: 0;
  }
`;

export const Wrapper = styled.main``;
export const Header = styled.h2`
  color: ${colors.white};
  font-size: 26px;
  margin: 0;
`;

export const Line = styled.hr`
  opacity: 10%;
  margin: ${(props) => (props.smallMargin ? "15px 0" : "35px 0")};
`;
export const Content = styled.p`
  color: ${colors.white};
  opacity: 0.7;
`;

export const Link = styled.p`
  font-size: 50px;
`;

export const AdditionalInfoContainer = styled.div`
  margin: 75px 35px;

  @media screen and (max-width: 1000px) {
  margin: 35px 0 0 0;
  }
`;

export const AdditionalInfoWrapper = styled.div`
  background-color: ${colors.darkPurple};
  border-radius: 5px;
  margin: 0;
  margin-bottom: 30px;
  padding: 25px;
  min-width: 260px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 15px 10px;
  flex-wrap: wrap;
`;

export const UrlLink = styled.a`
  color: ${colors.white};
  font-size: 13px;
  display: block;
  margin-bottom: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Category = styled.h5`
  color: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.mediumDarkPurple};
  margin: 0;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s background-color ease-in-out;

  &:hover {
  background-color: ${colors.darkestPurple};
  }
`;

export const SectionHeader = styled.h2`
  margin: 0;
  color: ${colors.orange};
`;
