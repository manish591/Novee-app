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
  Cart,
  Wishlist,
  Login
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
      {/* <Cart /> */}
      {/* <Wishlist /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;