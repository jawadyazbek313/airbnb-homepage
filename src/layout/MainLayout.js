import CatalogTabs from "../components/CatalogTabs";

import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import Catalog from "../components/Catalog";
import FooterCatalog from "../components/FooterCatalog";
import FooterHelpLinks from "../components/FooterHelpLinks";
import { Divider } from "@mui/material";

function MainLayout({ children }) {
  return (
    <>
      <header>
        <NavigationBar />
        <SearchBar />
      </header>
      <body>
        <CatalogTabs />
        <Catalog />
      </body>
      <Divider />
      <footer >

        <FooterCatalog />
        <Divider />
        <FooterHelpLinks />
      </footer>
    </>
  );
}

export default MainLayout;
