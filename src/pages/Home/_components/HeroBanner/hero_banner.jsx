import React from "react";

export default function HeroBanner({ isDarkMode = false }) {
  return (
    <section className="relative transition-colors duration-300 bg-white">
      {/* Hero Carousel */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Main Banner */}
        <div className="absolute inset-0 transition-colors duration-300 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50">
          <div className="absolute inset-0 transition-colors duration-300 bg-white bg-opacity-90"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="text-gray-900">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    MANG MẸ ĐI BỎ
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-red-600">
                    Take Mom to Throw Away
                  </h2>
                  <p className="text-lg mb-6 text-gray-700">
                    Sẽ thế nào khi yêu thương là gánh nặng?
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      2D, IMAX
                    </span>
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      K
                    </span>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      8.5 ★
                    </span>
                  </div>
                  <div className="text-sm mb-6 text-gray-600">
                    <p>DỰ KIẾN KHỞI CHIẾU: 01.08.2025</p>
                    <p>ĐỊNH DẠNG: 2D, IMAX VỚI PHỤ ĐỀ VÀ LỒNG TIẾNG</p>
                    <p className="mt-2">
                      Diễn viên: TUẦN TRẦN, HỒNG ĐÀO, JUNG IL-WOO
                    </p>
                    <p>
                      Đạo diễn: Mo Hong-Jin | Nhà sản xuất: Phan Gia Nhật Linh
                    </p>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Mua Vé Ngay
                  </button>
                </div>

                {/* Movie Poster */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="w-64 h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold">VIỆT - HÀN</h3>
                        <p className="text-sm">MANG MẸ ĐI BỎ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
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
                <span className="text-gray-900">
                  Chọn Phim
                </span>
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
                <span className="text-gray-900">
                  Chọn Rạp
                </span>
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
                <span className="text-gray-900">
                  Chọn Ngày
                </span>
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
                <span className="text-gray-900">
                  Chọn Suất
                </span>
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
