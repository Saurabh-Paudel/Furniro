import React from "react";
import RootLayout from "./Component/RootComponent/Layout/RootLayout";
import { Route, Routes } from "react-router-dom";

// Importing the pages for the  website
import Home from "./Component/Pages/ClientPages/Homepage";
import LoginSignup from "./Component/Pages/Authentication/LoginSignup";
import Shop from "./Component/Pages/ClientPages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
