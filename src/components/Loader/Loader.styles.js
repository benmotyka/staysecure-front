import styled, { css } from "styled-components";
import colors from "constans/colors";

const loaderCommon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  z-index: 10000;
`;

export const GlobalLoaderContainer = styled.div`
  ${loaderCommon};
  position: fixed;
  background-color: ${colors.black};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LocalLoaderContainer = styled.div`
  ${loaderCommon};
  width: 100%;
  height: 100%;
`;
