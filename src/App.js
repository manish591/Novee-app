import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Header, Navbar, Sidebar, Footer, ProtectedRoute } from "./components";

import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  NotFound,
  SingleProduct,
} from "./pages";

import {
  useKeepAuthData,
  useInitializeData,
  useStateContext,
  useScrollToTop,
} from "./hooks";

const App = () => {
  useKeepAuthData();
  useInitializeData();
  useScrollToTop();

  return (
    <div className="App">
      <Sidebar />
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
