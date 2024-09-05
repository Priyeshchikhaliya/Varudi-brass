import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderBar from "./HeaderBar"; 
import Footer from "./Footer";

function Layout(props) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure scrolling to top also on initial render
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10">
        <HeaderBar />
      </header>

      {/* Main content */}
      <main className="flex-grow flex justify-center">{props.children}</main>

      {/* Footer */}
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
