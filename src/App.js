import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";
import { RecoilRoot } from 'recoil';

import "i18n.js";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "en")
      document.title = "Stay Secure - cybersecurity courses";
  }, []);
  return (
    <RecoilRoot>
      <Routes />
      <Notebook />
    </RecoilRoot>
  );
}

export default withRouter(App);
