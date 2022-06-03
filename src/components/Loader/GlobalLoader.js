import Logo from "components/Logo/Logo";
import ReactLoader from "react-loader-spinner";

import {GlobalLoaderContainer, LogoWrapper} from "./Loader.styles"
const GlobalLoader = () => {
  return (
    <GlobalLoaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ReactLoader
        type="BallTriangle"
        color="#eee"
        height={100}
        width={100}
      />
    </GlobalLoaderContainer>
  );
};

export default GlobalLoader;
