import styled from "styled-components";
import {sidebarWidth} from "../Account/Sidebar/Sidebar.styles"
import {notebookWidth} from "components/Notebook/Notebook.styles"
import { courseSidebarWidth } from "components/Course/Sidebar.styles";

const footerHeight = "80px";
const navbarHeight = "80px";

export const PageCentered = styled.div`
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
display: flex;
align-items: center;
justify-content: center;
`

export const PageWrapper = styled.div`
width: 100%;
padding: 50px 0;

display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;
`

export const PageOneChild = styled.div`
width: 100%;
height: ${props => props.includeNavbar ? `calc(100vh - ${navbarHeight})` : "100vh"};

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
`

export const PageAccount = styled.div`
width: 100%;
height: calc(100vh - ${footerHeight} - ${navbarHeight});
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
display: flex;
`

export const PageSection = styled.div`
width: calc(100% - ${sidebarWidth});
padding: 35px;
overflow-y: auto;

`

export const PageCourse = styled.div`
height: calc(100vh - ${footerHeight} - ${navbarHeight});
width: calc(100vw - ${notebookWidth} - ${courseSidebarWidth});
margin-right: ${notebookWidth};
margin-left: ${courseSidebarWidth};
display: flex;
`

export const TemporaryHeader = styled.h1`
font-size: 52px;
color: white;
margin: 0;
`