import CatalogTabs from '../components/CatalogTabs';

import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';


function MainLayout({children}) {
  return (
<>
<header>
<NavigationBar/>
<SearchBar/>
<CatalogTabs/>
</header>

</>
  );
}

export default MainLayout;
