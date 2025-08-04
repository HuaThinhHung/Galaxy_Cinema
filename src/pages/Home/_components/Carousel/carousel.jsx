import React, { useState, useEffect } from "react";

export default function Carousel({ isDarkMode = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://cdn.galaxycine.vn/media/2025/6/25/fundiin-4_1750864808890.jpg",
      title: "FUNDIIN",
      subtitle: "Coming Soon",
      description: "Khám phá những điều kỳ diệu của cuộc sống",
    },
    {
      id: 2,
      image: "https://cdn.galaxycine.vn/media/2025/7/30/2048_1753846801447.jpg",
      title: "2048",
      subtitle: "Now Showing",
      description: "Tương lai đang chờ đợi bạn",
    },
    {
      id: 3,
      image:
        "https://cdn.galaxycine.vn/media/2025/8/2/malto-2048x682_1754122812692.jpg",
      title: "MALTO",
      subtitle: "Coming Soon",
      description: "Cuộc phiêu lưu mới đang bắt đầu",
    },
    {
      id: 4,
      image:
        "https://cdn.galaxycine.vn/media/2025/7/19/fantastic-4-1_1752925848373.jpg",
      title: "FANTASTIC FOUR",
      subtitle: "Now Showing",
      description: "Siêu anh hùng trở lại màn ảnh",
    },
    {
      id: 5,
      image:
        "https://cdn.galaxycine.vn/media/2025/7/14/conan-movie-28-3_1752485506068.jpg",
      title: "DETECTIVE CONAN",
      subtitle: "Coming Soon",
      description: "Thám tử lừng danh trở lại",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative transition-colors duration-300 bg-white">
      {/* Carousel Container */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                  <div className="max-w-2xl">
                    <div className="mb-4">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {slide.subtitle}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Mua Vé Ngay
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                        Xem Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 group"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
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
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 group"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-red-600 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-30">
          <div
            className="h-full bg-red-600 transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
