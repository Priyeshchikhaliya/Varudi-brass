// App.jsx
import React, { useEffect } from "react";
import ReactGA from "react-ga"; // Import react-ga for Google Analytics
import PublicRoute from "./route/PublicRoute";

const TRACKING_ID = "G-XN3D18477M"; // Replace with your Google Analytics Tracking ID

function App() {
  useEffect(() => {
    // Initialize Google Analytics with your Tracking ID
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return <PublicRoute />;
}

export default App;
