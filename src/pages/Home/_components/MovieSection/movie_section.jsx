import React from "react";

export default function MovieSection({ isDarkMode = false }) {
  const movies = [
    {
      id: 1,
      title: "The Fantastic Four: First Steps",
      vietnameseTitle: "Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên",
      rating: "9.6",
      ageRating: "T13",
      format: "2D, IMAX",
      releaseDate: "25.07.2025",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Mang Mẹ Đi Bỏ",
      vietnameseTitle: "Take Mom to Throw Away",
      rating: "8.5",
      ageRating: "K",
      format: "2D",
      releaseDate: "01.08.2025",
      image: "bg-gradient-to-br from-pink-500 to-red-500",
    },
    {
      id: 3,
      title: "Detective Conan: One-eyed Flashback",
      vietnameseTitle: "Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn",
      rating: "9.6",
      ageRating: "K",
      format: "2D",
      releaseDate: "25.07.2025",
      image: "bg-gradient-to-br from-green-500 to-blue-500",
    },
    {
      id: 4,
      title: "Toàn Trí Độc Giả",
      vietnameseTitle: "Omniscient Reader",
      rating: "7.0",
      ageRating: "T16",
      format: "2D",
      releaseDate: "31.07.2025",
      image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-12 transition-colors duration-300 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0 text-gray-900">
            PHIM
          </h2>

          {/* Tabs */}
          <div className="flex space-x-1 rounded-lg p-1 bg-gray-200">
            <button className="px-4 py-2 bg-red-600 text-white rounded-md font-medium">
              Đang chiếu
            </button>
            <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
              Sắp chiếu
            </button>
            <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
              Phim IMAX
            </button>
          </div>
        </div>

        {/* Location Filter */}
        <div className="flex items-center space-x-2 mb-6">
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-gray-600">
            Toàn quốc
          </span>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200 bg-gray-50 border border-gray-200"
            >
              {/* Movie Poster */}
              <div className={`h-64 ${movie.image} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {movie.rating} ★
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {movie.ageRating}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {movie.format}
                  </p>
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900">
                  {movie.title}
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  {movie.vietnameseTitle}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {movie.releaseDate}
                  </span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                    Mua vé
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-200 bg-gray-200 hover:bg-gray-300 text-gray-900">
            Xem thêm phim
          </button>
        </div>
      </div>
    </section>
  );
}
