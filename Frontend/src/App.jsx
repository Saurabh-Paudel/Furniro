import React from "react";
import RootLayout from "./Component/RootComponent/Layout/RootLayout";
import { Route, Routes } from "react-router-dom";

// Importing the pages for the  website
import Home from "./Component/Pages/ClientPages/Homepage";
import LoginSignup from "./Component/Pages/Authentication/LoginSignup";
import Shop from "./Component/Pages/ClientPages/Shop";
import ProductDetail from "./Component/Pages/ClientPages/ProductDetail";
import Cart from "./Component/Pages/ClientPages/Cart";
import Checkout from "./Component/Pages/ClientPages/Checkout";
import Contact from "./Component/Pages/ClientPages/Contact";
import Blog from "./Component/Pages/ClientPages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="shopping-cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
