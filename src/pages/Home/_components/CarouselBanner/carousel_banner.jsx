import React from "react";

export default function CarouselBanner({ isDarkMode = false }) {
  const currentMovie = {
    title: "MANG MẸ ĐI BỎ",
    subtitle: "Take Mom to Throw Away",
    description: "Sẽ thế nào khi yêu thương là gánh nặng?",
    rating: "8.5",
    ageRating: "K",
    format: "2D, IMAX",
    releaseDate: "01.08.2025",
    bgGradient: "from-pink-400 to-purple-500",
    image:
      "https://kenh14cdn.com/203336854389633024/2025/7/30/mmdb1stlookfalores-1753864859012-17538648592861150294576.png",
  };

  return (
    <section className="relative transition-colors duration-300 bg-white">
      {/* Banner Container */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentMovie.image}
            alt={currentMovie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-colors duration-300 bg-white bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-gray-900">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {currentMovie.title}
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-red-600 drop-shadow-lg">
                  {currentMovie.subtitle}
                </h2>
                <p className="text-lg mb-6 text-gray-700 drop-shadow-lg">
                  {currentMovie.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {currentMovie.format}
                  </span>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {currentMovie.ageRating}
                  </span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {currentMovie.rating} ★
                  </span>
                </div>
                <div className="text-sm mb-6 drop-shadow-lg text-gray-700">
                  <p>KHỞI CHIẾU: {currentMovie.releaseDate}</p>
                  <p>
                    ĐỊNH DẠNG: {currentMovie.format} VỚI PHỤ ĐỀ VÀ LỒNG TIẾNG
                  </p>
                  <p className="mt-2">
                    Diễn viên: TUẦN TRẦN, HỒNG ĐÀO, JUNG IL-WOO
                  </p>
                  <p>
                    Đạo diễn: Mo Hong-Jin | Nhà sản xuất: Phan Gia Nhật Linh
                  </p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Mua Vé Ngay
                </button>
              </div>

              {/* Movie Poster - Ultimate 5D Experience */}
              <div className="hidden md:flex justify-center">
                <div className="relative group perspective-1000">
                  {/* 5D Container with Parallax */}
                  <div className="relative w-80 h-[500px] transform-style-preserve-3d transition-all duration-1000 group-hover:rotate-y-15 group-hover:rotate-x-10 group-hover:scale-110">
                    {/* Depth Layer 1 - Background */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30 transform translate-z-20 backface-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                    </div>

                    {/* Depth Layer 2 - Main Image */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden transform translate-z-40 backface-hidden">
                      <img
                        src={currentMovie.image}
                        alt={currentMovie.title}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
                    </div>

                    {/* Depth Layer 3 - Holographic Overlay */}
                    <div className="absolute inset-0 rounded-xl transform translate-z-60 backface-hidden">
                      {/* 5D Holographic Grid */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-holographic-grid rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-holographic-grid-vertical rounded-xl"></div>

                      {/* 5D Data Streams */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 animate-data-stream"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-400 animate-data-stream-vertical"></div>
                    </div>

                    {/* Depth Layer 4 - Interactive Elements */}
                    <div className="absolute inset-0 rounded-xl transform translate-z-80 backface-hidden">
                      {/* 5D Floating Icons */}
                      <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400 rounded-full animate-float-3d opacity-80 shadow-lg shadow-cyan-400/50"></div>
                      <div className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full animate-float-3d-delayed opacity-80 shadow-lg shadow-pink-400/50"></div>
                      <div className="absolute top-1/2 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-float-3d-delayed-2 opacity-80 shadow-lg shadow-yellow-400/50"></div>

                      {/* 5D Energy Rings */}
                      <div className="absolute inset-4 rounded-lg border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-energy-ring"></div>
                      <div className="absolute inset-6 rounded-lg border border-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-energy-ring-delayed"></div>
                      <div className="absolute inset-8 rounded-lg border border-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-energy-ring-delayed-2"></div>
                    </div>

                    {/* Depth Layer 5 - Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white z-50 transform translate-z-100">
                      <h3 className="text-xl font-bold mb-2 drop-shadow-lg animate-text-glow-3d">
                        GALAXY CINEMA
                      </h3>
                      <p className="text-sm font-medium drop-shadow-lg animate-text-glow-3d-delayed">
                        {currentMovie.title}
                      </p>
                      <div className="mt-3 flex items-center space-x-2">
                        <span className="bg-orange-500/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium border border-orange-400/50 animate-badge-glow">
                          {currentMovie.rating} ★
                        </span>
                        <span className="bg-red-500/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium border border-red-400/50 animate-badge-glow-delayed">
                          {currentMovie.ageRating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5D External Energy Field */}
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>

                  {/* 5D Energy Orbs - External */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-orb-float shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-orb-float-delayed shadow-lg shadow-pink-400/50"></div>
                  <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-orb-float-delayed-2 shadow-lg shadow-yellow-400/50"></div>

                  {/* 5D Particle Matrix */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-particle-sparkle"></div>
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-particle-sparkle-delayed"></div>
                    <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-yellow-400 rounded-full animate-particle-sparkle-delayed-2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-particle-sparkle-delayed-3"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-particle-sparkle-delayed-4"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-particle-sparkle-delayed-5"></div>
                  </div>

                  {/* 5D Dimensional Portal */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1500 animate-dimensional-portal"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Steps */}
      <div className="py-6 transition-colors duration-300 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span className="text-gray-900">Chọn Phim</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span className="text-gray-900">Chọn Rạp</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span className="text-gray-900">Chọn Ngày</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <span className="text-gray-900">Chọn Suất</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Mua vé nhanh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
