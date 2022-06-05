import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Account/Sidebar/Sidebar";
import SettingsCard from "components/Account/Cards/Settings";
import { PageAccount, PageSection } from "components/Pages/Pages.styles";
import NavbarClean from "components/Navbar/NavbarClean";
import { useLogin } from "store/actions/user";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const { userDetails } = useLogin();
  useEffect(() => {
    if (!userDetails) history.push("/login");
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("helmet.titles.account")}</title>
      </Helmet>
      {userDetails && (
        <>
          <NavbarClean />
          <PageAccount>
            <Sidebar />
            <PageSection>
              <SettingsCard />
            </PageSection>
          </PageAccount>
          <Footer />
        </>
      )}
    </>
  );
};

export default Settings;
