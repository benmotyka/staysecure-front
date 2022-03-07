import styled from "styled-components";
import colors from "constans/colors"
import {IoIosArrowDown as ExpandArrowIcon} from "react-icons/io"
export const Container = styled.div`
background-color: ${colors.mediumDarkPurple};
padding: 25px;
margin-bottom: 50px;
`

export const Header = styled.h2`
font-size: 22px;
color: ${colors.white};
@media screen and (max-width: 1000px) {
  text-align: center;
}
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 1000px) {
  flex-direction: column;
  margin-bottom: 25px;
}
`

export const ExpandArrow = styled(ExpandArrowIcon)`
color: ${colors.white};
font-size: 30px;
margin-right: 20px;
background-color: ${colors.darkPurple};
padding: 10px;
border-radius: 50%;
cursor: pointer;
transition: transform 0.6s ease;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "")};
`

export const Wrapper = styled.div`
overflow: hidden;
transition: max-height 0.6s ease;

`