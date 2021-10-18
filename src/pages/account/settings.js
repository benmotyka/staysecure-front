import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Account/Sidebar/Sidebar";
import SettingsCard from "components/Account/Cards/Settings";
import { PageAccount, PageSection } from "components/Pages/Pages.styles";
import NavbarClean from "components/Navbar/NavbarClean";
const Settings = () => {
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/login");
  }, []);

  const user = useSelector(selectUser);

  return (
    <>
      {user && (
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
