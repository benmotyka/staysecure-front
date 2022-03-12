import styled, { css } from "styled-components";
import { courseSidebarWidth } from "components/Course/Sidebar.styles";
import colors from "constans/colors";
export const Container = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(0,0,0,0.7);
z-index: 100;
`

export const SidebarWrapper = styled.div`
position: absolute;
box-sizing: border-box;
width: ${courseSidebarWidth};
height: 100%;
/* border: 1px dashed red; */
background-image: linear-gradient(orange 33%, rgba(255,255,255,0) 0%);
background-position: right;
background-size: 2px 40px;
background-repeat: repeat-y;
`