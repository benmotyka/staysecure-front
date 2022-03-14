import styled, { css } from "styled-components";
import { courseSidebarWidth } from "components/Course/Sidebar.styles";
import { notebookWidth } from "components/Notebook/Notebook.styles";

import colors from "constans/colors";

const BoxCommonStyles = css`
  position: absolute;
  box-sizing: border-box;
  height: 100%;
`;

const WrapperCommonStyles = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkestPurple};
  padding: 20px;
  border-radius: 5px;
  gap: 20px;
`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const SidebarBox = styled.div`
  ${BoxCommonStyles};
  width: ${courseSidebarWidth};
  background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, bottom, top;
  background-size: 2px 30px, 30px 2px, 30px 2px;
  background-repeat: repeat-y, repeat-x, repeat-x;
`;

export const SidebarWrapper = styled.div`
  ${WrapperCommonStyles};
  left: calc(${courseSidebarWidth} + 5%);
  top: 50%;
  transform: translateY(-50%);
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${colors.orange};
  opacity: 0.8;
  font-weight: bold;
  font-size: 14px;
  max-width: 150px;
  margin: 0;
`;

export const SlideBox = styled.div`
  ${BoxCommonStyles};
  width: calc(100vw - ${notebookWidth} - ${courseSidebarWidth});
  left: ${courseSidebarWidth};
  background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, bottom, top, left;
  background-size: 2px 30px, 30px 2px, 30px 2px, 2px 30px;
  background-repeat: repeat-y, repeat-x, repeat-x, repeat-y;
`;

export const SlideWrapper = styled.div`
  ${WrapperCommonStyles};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
`;
export const NavigationBox = styled.div`
  ${BoxCommonStyles};
  left: ${courseSidebarWidth};
  right: ${notebookWidth};
  bottom: 0;
  height: 80px;
  background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, top, left;
  background-size: 2px 30px, 30px 2px, 2px 30px;
  background-repeat: repeat-y, repeat-x, repeat-y;
`;

export const NavigationWrapper = styled.div`
  ${WrapperCommonStyles};
  bottom: 100px;
  left: 50%;
`;
