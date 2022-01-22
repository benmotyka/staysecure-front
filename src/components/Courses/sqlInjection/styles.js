import styled from "styled-components";
import colors from "constans/colors.js"
import {HiCode as Code} from "react-icons/hi"

export const ContainerOneItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const WrapperOneItem = styled.div`
height: 100%;
width: 100%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;


export const Wrapper = styled.div`
height: 50%;
width: 100%;

`

export const CodeWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const CodeHeaderContainer = styled.div`
height: 35px;
width: 100%;
background-color: ${colors.darkThemeCode};
margin: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`

export const CodeHeader = styled.h2`
color: ${colors.orange};
font-size: 20px;
margin: 0;
`

export const CodeIcon = styled(Code)`
font-size: 20px;
color: ${colors.orange};
`

export const PageBody = styled.div`
  width: 100%;
  height: ${props => props.full ? "100%" : "250px"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;