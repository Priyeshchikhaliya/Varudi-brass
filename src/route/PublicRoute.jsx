import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Category from "../pages/Category";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

function PublicRoute() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Category />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default PublicRoute;
