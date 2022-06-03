import ReactLoader from "react-loader-spinner";

import {LocalLoaderContainer} from "./Loader.styles"
const LocalLoader = () => {
  return (
    <LocalLoaderContainer>
      <ReactLoader
        type="BallTriangle"
        color="#eee"
        height={100}
        width={100}
      />
    </LocalLoaderContainer>
  );
};

export default LocalLoader;
