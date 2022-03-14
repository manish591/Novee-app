import "./App.css";
import { 
  Header, 
  Navbar,
  Sidebar,
  Carousel,
  Footer
} from './components';

import {
  Home,
  ProductListing
} from './pages';

const App = ()  => {
  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
        {/* <Carousel /> */}
      </Header>
      {/* <Home /> */}
      <ProductListing />
      <Footer />
    </div>
  );
}

export default App;