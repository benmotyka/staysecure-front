import styled, { css } from "styled-components";
import colors from "constans/colors";

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  color: ${colors.white};
  transform: translate(-40%, 110%);
  left: ${(props) => (props.left ? props.left : 0)};
  font-size: 14px;
  opacity: 0.7;
  transition: 0.2s opacity ease-in-out;
`;

export const ScaleChartContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-items: space-between;
  gap: 5px;
  position: relative;
  transition: 0.2s width ease-in-out;
  &:hover ${TextWrapper} {
    opacity: 1;
  }
`;

const wrapperCommon = css`
  opacity: 0.7;
  border-radius: 3px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s opacity ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const CorrectWrapper = styled.div`
  ${wrapperCommon};
  width: ${(props) => (props.width ? props.width : 0)};
  background-color: ${colors.lightGreen};
`;

export const WrongWrapper = styled.div`
  flex-grow: 1;
  ${wrapperCommon};
  background-color: ${colors.red};
`;
