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

  @media screen and (max-width: 1000px) {
    padding: 50px 0;
  }
`;

export const HeaderWrapper = styled.div`
  width: 40%;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 32px;
  color: ${colors.white};
  margin: 0;
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 50%;
  column-gap: 20px;
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
`;

export const ItemsWrapper = styled.ul`
  background-color:  ${colors.mediumDarkPurple};
  width: 50%;
  list-style: none;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 0;
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
`

export const Answer = styled.p`
margin: 0;

`

export const FaqInput = styled.input`
  font-size: 18px;
  color: ${colors.white};
  margin: 15px 0;
  padding: 15px 25px;
  background-color: ${colors.mediumDarkPurple};
  border: 1px solid ${colors.darkestPurple};s
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

export const Text = styled.p`
font-size: 20px;
color: ${colors.white};
`

export const Highlight = styled.span`
color: ${colors.orange};
`