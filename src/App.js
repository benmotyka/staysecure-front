import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";

function App() {
  return (
    <>
    <Routes/>
    <Notebook/>
    </>
  );
}

export default withRouter(App);
