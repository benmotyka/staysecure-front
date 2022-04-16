import styled, { css } from "styled-components";
import colors from "constans/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  border-radius: 5px;
  min-width: 800px;
  @media screen and (max-width: 1000px) {
    min-width: 200px;
    padding: 50px 0;
  }
`;

export const HeaderWrapper = styled.div`
  width: 800px;
  text-align: center;
  padding: 15px 0;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Header = styled.h1`
  font-size: 32px;
  color: ${colors.white};
  margin: 0;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 800px;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  box-sizing: border-box;
  background-color: ${colors.mediumDarkPurple};
  border: ${(props) =>
    props.active
      ? `2px solid ${colors.orange}`
      : `2px solid ${colors.darkPurple}`};
  opacity: ${(props) => (props.active ? `1` : `0.7`)};
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  font-size: 25px;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    opacity: 1;
    border: 2px solid ${colors.orange};
  }

  @media screen and (max-width: 1000px) {
    padding: 15px;
    font-size: 18px;
  }
`;

export const ItemsWrapper = styled.ul`
  background-color: ${(props) =>
    props.noBg
      ? ``
      : colors.mediumDarkPurple};
  width: 800px;
  list-style: none;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Item = styled.li`
  color: ${colors.white};
  padding: 25px;
  background-color: ${colors.darkPurple};
  margin: 20px;
  margin-bottom: 0;
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Question = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Answer = styled.p`
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const faqInputStyles = css`
  font-size: 18px;
  background-color: ${colors.mediumDarkPurple};
  color: ${colors.white};
  margin: 0;
  padding: 15px 25px;
  border: 1px solid ${colors.darkestPurple};
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`

export const FaqInput = styled.input`
  ${faqInputStyles};
`;


export const Text = styled.p`
  font-size: 20px;
  color: ${colors.white};
  text-align: ${(props) => (props.center ? `center` : '')};
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.span`
  color: ${colors.orange};
  cursor: ${(props) => (props.pointer ? `pointer` : `auto`)};
`;
