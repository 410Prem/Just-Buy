import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Start loading state

    try {
      const response = await fetch("http://localhost:8080/justbuy/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      if (result.status === "success") {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Store login state
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed. Please check your connection.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email) {
      alert("Email cannot be blank.");
      return false;
    }

    if (!password) {
      alert("Password cannot be blank.");
      return false;
    }

    return true;
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </section>
  );
};

export default Login;
