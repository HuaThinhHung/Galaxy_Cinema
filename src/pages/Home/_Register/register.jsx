import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ isDarkMode = false }) {
  const [formData, setFormData] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Register attempt:", formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 z-50 bg-white text-gray-900 hover:bg-gray-200"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Trang chủ
      </button>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-red-400"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-yellow-400"></div>
      </div>

      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-lg border border-gray-200/50">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <img
              src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
              alt="Galaxy Cinema Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Galaxy Cinema
          </h1>
          <p className="text-sm text-gray-600">Tạo tài khoản mới</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Họ và Tên
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              placeholder="Nhập họ và tên"
              type="text"
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tài Khoản
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              placeholder="Nhập tài khoản"
              type="text"
              name="taiKhoan"
              value={formData.taiKhoan}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              placeholder="example@email.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Số Điện Thoại
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              placeholder="0123456789"
              type="tel"
              name="soDT"
              value={formData.soDT}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mật Khẩu
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
                placeholder="Nhập mật khẩu"
                type={showPassword ? "text" : "password"}
                name="matKhau"
                value={formData.matKhau}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Xác Nhận Mật Khẩu
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
                placeholder="Nhập lại mật khẩu"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border transition-colors duration-200 bg-white border-gray-300 text-red-500 focus:ring-red-500"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              Tôi đồng ý với{" "}
              <a
                href="#"
                className="hover:underline transition-colors duration-200 text-red-600 hover:text-red-500"
              >
                điều khoản và điều kiện
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
            } bg-red-600 hover:bg-red-700 text-white focus:ring-red-500`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Đang đăng ký...
              </div>
            ) : (
              "Đăng Ký"
            )}
          </button>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-sm text-gray-600">Đã có tài khoản? </span>
            <button
              type="button"
              className="text-sm font-medium hover:underline transition-colors duration-200 text-red-600 hover:text-red-500"
            >
              Đăng nhập ngay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
