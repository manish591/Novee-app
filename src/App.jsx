import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useKeepAuthData, useInitializeData, useScrollToTop } from 'hooks';
import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  NotFound,
  SingleProduct,
  UserProfile,
  AddressPage,
  Settings,
  CouponsPage,
  OrdersPage,
  Overview,
  ProfilePage,
  Checkout,
  OrdersResult,
} from 'pages';
import { Header, Navbar, Sidebar, Footer, ProtectedRoute } from 'components';

const App = () => {
  useKeepAuthData();
  useInitializeData();
  useScrollToTop();

  return (
    <div className="App">
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'var(--text2)',
            color: 'var(--surface2)',
          },
        }}
      />
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
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route path="/myorders/:orderID" element={<OrdersResult />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }>
          <Route index element={<Overview />} />
          <Route path="address" element={<AddressPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="coupons" element={<CouponsPage />} />
          <Route path="edit" element={<ProfilePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;