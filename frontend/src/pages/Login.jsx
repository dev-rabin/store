import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/storeApis";
import { useAuth } from "../guard/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await login(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_name", data.user.name);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      alert(error?.message || "Login failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {" "}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        {" "}
        <div className="grid lg:grid-cols-2">
          {/* Left Side */}{" "}
          <div className="bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 flex items-center justify-center p-10">
            {" "}
            <img
              src="/image/shopping.png"
              alt="Shopping"
              className="w-full max-w-md object-contain"
            />{" "}
          </div>
          {/* Right Side */}
          <div className="flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Welcome Back
              </h1>

              <p className="text-gray-500 mb-8">Login to your Shoppy account</p>

              <form onSubmit={handleSubmit}>
                {/* Email / Phone */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email or Phone
                  </label>

                  <input
                    type="text"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    placeholder="Enter email or phone"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    required
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                w-full
                bg-red-500
                hover:bg-red-600
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
                duration-300
                disabled:opacity-50
              "
                >
                  {loading ? "Logging In..." : "Login"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-2">
                <div className="flex-1 border-t"></div>
                <span className="px-4 text-gray-400 text-sm">OR</span>
                <div className="flex-1 border-t"></div>
              </div>

              {/* Signup */}
              <p className="text-center text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-red-500 font-semibold hover:text-red-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
