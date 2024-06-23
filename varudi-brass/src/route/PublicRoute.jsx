import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";


function PublicRoute() {
  return (
    <div className="zoom-adjust">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route exact path="/" element={<Navigate to="/home" />}></Route>
          <Route exact path="/home" element={<Home />} />

        
        </Routes>
      </Router>
    </div>
  );
}

export default PublicRoute;
