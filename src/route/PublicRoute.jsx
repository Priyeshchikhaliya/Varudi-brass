// PublicRoute.jsx
import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga"; // Import react-ga to track page views
import Home from "../pages/Home";
import Products from "../pages/Products";
import Category from "../pages/Category";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

// Custom component to log page views on route changes
function LogPageView() {
  const location = useLocation();

  useEffect(() => {
    // Track page view using react-ga
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function PublicRoute() {
  return (
    <div className="">
      <Router>
        <LogPageView /> {/* Log page views whenever the route changes */}
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
