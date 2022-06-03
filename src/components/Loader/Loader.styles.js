import styled, { css } from "styled-components";
import colors from "constans/colors";

const loaderCommon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index: 10000;
`;

export const GlobalLoaderContainer = styled.div`
  ${loaderCommon};
  position: fixed;
  background-color: ${colors.lightPurple};
  inset: 0;
  opacity: 1;
  flex-direction: column;
`;

export const LocalLoaderContainer = styled.div`
  ${loaderCommon};
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
position: absolute;
top: 20%;
`