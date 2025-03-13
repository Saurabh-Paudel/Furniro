import React from "react";
import RootLayout from "./Component/RootComponent/Layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/ClientPages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
