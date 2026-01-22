import React, { useState } from "react";
import { login, register, forgotPassword } from "../services/authService";
import HeroSection from "../components/common/HeroSection";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await register(formData);

      // login automatique après register
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
};

  // ---------------- FORGOT PASSWORD ----------------
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await forgotPassword(formData.email);
      setSuccess("Password reset link has been sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to process request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSection
        title="Authentication"
        current="Account"
        image="/images/bg_1.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4 shadow-sm">

                {/* Tabs */}
                <div className="text-center mb-4">
                  <button
                    className={`btn mr-2 ${
                      activeTab === "login"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => {
                      setActiveTab("login");
                      setError("");
                      setSuccess("");
                    }}
                  >
                    Login
                  </button>

                  <button
                    className={`btn mr-2 ${
                      activeTab === "register"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => {
                      setActiveTab("register");
                      setError("");
                      setSuccess("");
                    }}
                  >
                    Register
                  </button>

                  <button
                    className={`btn ${
                      activeTab === "forgot"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => {
                      setActiveTab("forgot");
                      setError("");
                      setSuccess("");
                    }}
                  >
                    Forgot Password
                  </button>
                </div>

                {/* Alerts */}
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

                {/* LOGIN */}
                {activeTab === "login" && (
                  <form onSubmit={handleLogin}>
                    <input
                      name="email"
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                    <input
                      name="password"
                      type="password"
                      className="form-control mb-3"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />

                    <button
                      className="btn btn-dark btn-block"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className="text-center mt-3">
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setActiveTab("forgot")}
                      >
                        Forgot your password?
                      </button>
                    </p>
                  </form>
                )}

                {/* REGISTER */}
                {activeTab === "register" && (
                  <form onSubmit={handleRegister}>
                    <input
                      name="firstName"
                      className="form-control mb-3"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                    <input
                      name="lastName"
                      className="form-control mb-3"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                    <input
                      name="password"
                      type="password"
                      className="form-control mb-3"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                    <button
                      className="btn btn-dark btn-block"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </form>
                )}

                {/* FORGOT PASSWORD */}
                {activeTab === "forgot" && (
                  <form onSubmit={handleForgotPassword}>
                    <p className="text-muted text-center mb-3">
                      Enter your email to receive a password reset link.
                    </p>

                    <input
                      name="email"
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />

                    <button
                      className="btn btn-dark btn-block"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
