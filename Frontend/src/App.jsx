import React from "react";
import RootLayout from "./Component/RootComponent/Layout/RootLayout";
import { Route, Routes } from "react-router-dom";

// Importing the pages for the  website
import Home from "./Component/Pages/ClientPages/Homepage";
import LoginSignup from "./Component/Pages/Authentication/LoginSignup";
import Shop from "./Component/Pages/ClientPages/Shop";
import ProductDetail from "./Component/Pages/ClientPages/ProductDetail";
import Cart from "./Component/Pages/ClientPages/Cart";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
