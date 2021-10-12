import ReactLoader from "react-loader-spinner";

import {LoaderContainer} from "./Loader.styles"
const Loader = () => {
  return (
    <LoaderContainer>
      <ReactLoader
        type="TailSpin"
        color="#eee"
        height={100}
        width={100}
      />
    </LoaderContainer>
  );
};

export default Loader;
