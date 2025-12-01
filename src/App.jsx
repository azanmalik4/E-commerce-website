import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women from "./assets/women_banner.avif";
import kids from "./assets/kids_banner.jpg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kids} />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
