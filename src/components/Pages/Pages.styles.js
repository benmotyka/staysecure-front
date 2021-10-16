import styled from "styled-components";
import {sidebarWidth} from "../Account/Sidebar/Sidebar.styles"

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
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;
`

const footerHeight = "80px";
const navbarHeight = "80px";

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