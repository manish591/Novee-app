import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Mockman from "mockman-js";

import { 
  Header, 
  Navbar,
  Sidebar,
  Carousel,
  Footer,
  Loader
} from './components';

import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup
} from './pages';

const App = ()  => {
  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;