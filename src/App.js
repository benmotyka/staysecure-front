import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";

import 'i18n.js'

function App() {
  return (
    <>
    <Routes/>
    <Notebook/>
    </>
  );
}

export default withRouter(App);
