import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";
import { RecoilRoot } from 'recoil';

import "i18n.js";

function App() {

  return (
    <RecoilRoot>
      <Routes />
      <Notebook />
    </RecoilRoot>
  );
}

export default withRouter(App);
