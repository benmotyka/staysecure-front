import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";

import VerifyJwt from "components/VerifyJwt/VerifyJwt";

function App() {
  return (
    <>
    <Routes/>
    <Notebook/>
    <VerifyJwt/>
    </>
  );
}

export default withRouter(App);
