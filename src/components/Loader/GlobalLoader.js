import ReactLoader from "react-loader-spinner";

import {GlobalLoaderContainer} from "./Loader.styles"
const GlobalLoader = () => {
  return (
    <GlobalLoaderContainer>
      <ReactLoader
        type="TailSpin"
        color="#eee"
        height={100}
        width={100}
      />
    </GlobalLoaderContainer>
  );
};

export default GlobalLoader;
