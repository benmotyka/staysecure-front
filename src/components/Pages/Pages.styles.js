import styled, {css} from "styled-components";
import {notebookWidth} from "components/Notebook/Notebook.styles"
import { courseSidebarWidth } from "components/Course/Sidebar.styles";
import { navbarHeight } from "components/Navbar/Navbar.styles";
import { footerHeight } from "components/Footer/Footer.styles";

const flexCentered = css`
display: flex; 
align-items: center;
justify-content: center;
`

export const PageCentered = styled.div`
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
${flexCentered};
`

export const PageWrapper = styled.div`
width: 100%;
padding: 50px 0;
min-height: 100vh;

${flexCentered};
flex-direction: column;
`

export const PageOneChild = styled.div`
width: 100%;
min-height: ${props => props.includeNavbar ? `calc(100vh - ${navbarHeight})` : "100vh"};
${flexCentered};
flex-direction: column;
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
@media screen and (max-width: 600px) {
padding: 25px 0;
}
`

export const PageAccount = styled.div`
width: 100%;
height: calc(100vh - ${footerHeight} - ${navbarHeight});
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
display: grid;
grid-template-columns: 330px 1fr;

@media screen and (max-width: 1000px) {
height: auto;
grid-template-columns: 1fr;
grid-template-rows: min-content 1fr;
}
`

export const PageSection = styled.div`
padding: 35px;
overflow-y: auto;

@media screen and (max-width: 1000px) {
    padding: 35px 20px;
}

@media screen and (max-width: 600px) {
    padding: 35px 10px;
}

`

export const PageCourse = styled.div`
height: calc(100vh - ${footerHeight} - ${navbarHeight});
width: calc(100vw - ${notebookWidth} - ${courseSidebarWidth});
margin-right: ${notebookWidth};
margin-left: ${courseSidebarWidth};
display: flex;
overflow-x: hidden;
background-color:  #2B2E4A;
`

export const PageOneItemCentered = styled.div`
width: 100%;
min-height: calc(100vh - ${footerHeight} - ${navbarHeight});
${flexCentered};
padding: 25px;
box-sizing: border-box;
`

export const BlankPage = styled.div`
min-height: calc(100vh - ${footerHeight} - ${navbarHeight});
width: 100%;
`