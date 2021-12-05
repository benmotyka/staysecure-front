import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";

import 'i18n.js'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if(localStorage.getItem('i18nextLng') === 'en') document.title = 'Stay Secure - cybersecurity courses'
  },[])
  return (
    <>
    <Routes/>
    <Notebook/>
    </>
  );
}

export default withRouter(App);
