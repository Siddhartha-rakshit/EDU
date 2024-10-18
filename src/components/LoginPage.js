import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUserGraduate, FaChalkboardTeacher, FaClipboardCheck } from "react-icons/fa";

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-black-100 flex flex-col lg:flex-row">
        <h1 className="text-4xl font-bold">
          <span className="text-red-600">Spirea</span>
          <span className="text-black">Arch</span>
        </h1>
        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <svg className="w-20 h-20" viewBox="0 0 100 100">
                <path
                  d="M0,50 a1,1 0 0,0 100,0"
                  fill="none"
                  stroke="#FF0000"
                  strokeWidth="4"
                />
                <path
                  d="M0,50 a1,1 0 0,1 100,0"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Welcome Back!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Please login to access your account and explore our features.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative mb-8">
              <div className="flex bg-gray-200 rounded-t-lg overflow-hidden">
                <button
                  className={`flex-1 py-2 font-semibold transition-all duration-300 relative z-10 ${
                    selectedRole === "Mentor"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-200"
                  }`}
                  onClick={() => handleRoleSelect("Mentor")}
                >
                  <FaChalkboardTeacher className="inline mr-2" />
                  Mentor
                </button>
                <button
                  className={`flex-1 py-2 font-semibold transition-all duration-300 relative z-10 ${
                    selectedRole === "User"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-200"
                  }`}
                  onClick={() => handleRoleSelect("User")}
                >
                  <FaUserGraduate className="inline mr-2" />
                  User
                </button>
                <button
                  className={`flex-1 py-2 font-semibold transition-all duration-300 relative z-10 ${
                    selectedRole === "Evaluator"
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:bg-purple-200"
                  }`}
                  onClick={() => handleRoleSelect("Evaluator")}
                >
                  <FaClipboardCheck className="inline mr-2" />
                  Evaluator
                </button>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-full transition-all duration-300 rounded-b-lg ${
                  selectedRole === "Mentor"
                    ? "bg-blue-600"
                    : selectedRole === "User"
                    ? "bg-green-600"
                    : "bg-purple-600"
                }`}
                style={{
                  width: "33.33%",
                  transform: selectedRole === "Mentor" ? "translateX(0%)" : selectedRole === "User" ? "translateX(100%)" : "translateX(200%)",
                  zIndex: 0,
                  borderTopLeftRadius: "0.5rem", // Keep rounded corners at the top
                  borderTopRightRadius: "0.5rem",
                }}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      emailError ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    aria-invalid={emailError ? "true" : "false"}
                    aria-describedby="email-error"
                  />
                  <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                </div>
                {emailError && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {emailError}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className={`w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      passwordError ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    aria-invalid={passwordError ? "true" : "false"}
                    aria-describedby="password-error"
                  />
                  <FaLock className="absolute right-3 top-3 text-gray-400" />
                </div>
                {passwordError && (
                  <p
                    id="password-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {passwordError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors duration-300"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;