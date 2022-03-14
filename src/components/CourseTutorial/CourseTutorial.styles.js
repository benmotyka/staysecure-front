import styled, { css } from "styled-components";
import { courseSidebarWidth } from "components/Course/Sidebar.styles";
import { notebookWidth } from "components/Notebook/Notebook.styles";

import colors from "constans/colors";

const BoxCommonStyles = css`
  position: absolute;
  box-sizing: border-box;
`;

const WrapperCommonStyles = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkestPurple};
  padding: 10px;
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
  height: 100%;
  width: ${courseSidebarWidth};
  background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, bottom, top, left;
  background-size: 2px 20px, 20px 2px, 20px 2px, 2px 20px;
  background-repeat: repeat-y, repeat-x, repeat-x, repeat-y;
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
  color: ${colors.white};
  opacity: 0.7;
  font-size: 14px;
  max-width: 250px;
  margin: 0;
`;

export const Highlight = styled.span`
  color: ${colors.orange};
  font-weight: bold;
`

export const SlideBox = styled.div`
  ${BoxCommonStyles};
  height: calc(100% - 80px);
  width: calc(100vw - ${notebookWidth} - ${courseSidebarWidth});
  left: ${courseSidebarWidth};
  top: 0;
  background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, bottom, top, left;
  background-size: 2px 20px, 20px 2px, 20px 2px, 2px 20px;
  background-repeat: repeat-y, repeat-x, repeat-x, repeat-y;
`;

export const SlideWrapper = styled.div`
  ${WrapperCommonStyles};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, top, bottom, left;
  background-size: 2px 20px, 20px 2px, 20px 2px, 2px 20px;
  background-repeat: repeat-y, repeat-x, repeat-x, repeat-y;
`;

export const NavigationWrapper = styled.div`
  ${WrapperCommonStyles};
  bottom: 100px;
  left: 50%;
`;

export const CourseLevelBox = styled.div`
  ${BoxCommonStyles};
left: 0;
width: ${courseSidebarWidth};
bottom: 0;
height: 80px;
background-image: linear-gradient(
      ${colors.orange} 33%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${colors.orange} 33%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(${colors.orange} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: right, bottom, top, left;
  background-size: 2px 20px, 20px 2px, 20px 2px, 2px 20px;
  background-repeat: repeat-y, repeat-x, repeat-x, repeat-y;
`

export const CourseLevelWrapper = styled.div`
  ${WrapperCommonStyles};
  bottom: 100px;
  left: 10%;
`;