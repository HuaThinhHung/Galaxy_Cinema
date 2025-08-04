import React from "react";
import Carousel from "../_components/Carousel/carousel.jsx";
import CarouselBanner from "../_components/CarouselBanner/carousel_banner.jsx";
import MovieSection from "../_components/MovieSection/movie_section.jsx";
import AppPromotion from "../_components/AppPromotion/app_promotion.jsx";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <CarouselBanner />
      <MovieSection />
      <AppPromotion />
    </div>
  );
}
