import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./components/Main";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="*"
          element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
