import styled from "styled-components";
import colors from "constans/colors";
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.black};
  opacity: 0.2;
  z-index: 10000;
`;
