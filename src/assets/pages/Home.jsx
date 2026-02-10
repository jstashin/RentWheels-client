import HeroSlider from "../Component/HeroSlider";
import FeaturedCars from "../Component/FeaturedCars";
import WhyRentWithUs from "../Component/WhyRentWithUs";
import TopRatedCars from "../Component/TopRatedCars";
import Testimonials from "../Component/Testimonials";
import React from 'react';
export default function Home() {
  return (
    <div>
      <HeroSlider />
      <FeaturedCars />
      <WhyRentWithUs />
      <TopRatedCars />
      <Testimonials />
    </div>
  );
}
