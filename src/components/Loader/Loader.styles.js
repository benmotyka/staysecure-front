import styled from "styled-components";
import colors from "constans/colors";
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.6;
  z-index: 10000;
`;
