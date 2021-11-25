import Notebook from "components/Notebook/Notebook";
import { withRouter } from "react-router";
import Routes from "routes";
import { I18nProvider, LOCALES } from "i18n";

function App() {
  return (
    <I18nProvider locale={LOCALES.POLISH}>
    <Routes/>
    <Notebook/>
    </I18nProvider>
  );
}

export default withRouter(App);
