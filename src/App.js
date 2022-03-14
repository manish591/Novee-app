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
  ProductListing,
  Cart
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
      {/* <ProductListing /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;