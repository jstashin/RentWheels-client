import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Book local cars in minutes",
    subtitle:
      "Browse real listings from nearby providers and reserve your ride with transparent pricing and details.",
    highlight: "Fast booking • Transparent pricing",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Browse Cars",
    ctaLink: "/browseCars",
  },
  {
    title: "Providers can list & manage cars easily",
    subtitle:
      "Add your car with photos, category, location and price per day. Update availability anytime.",
    highlight: "Add listing • Manage availability",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Add Car",
    ctaLink: "/addCar",
  },
  {
    title: "Safe rentals with clear availability",
    subtitle:
      "See Available/Booked status, prevent double booking, and get support when you need it.",
    highlight: "Available/Booked • 24/7 support",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    ctaText: "My Bookings",
    ctaLink: "/myBooking",
  },
];

export default function HeroSlider() {
  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="rounded-2xl overflow-hidden"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="relative h-[380px] md:h-[430px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />

                <div className="relative h-full flex items-center">
                  <div className="p-6 md:p-10 max-w-2xl">
                    <p className="inline-block text-xs md:text-sm bg-white/15 text-white px-3 py-1 rounded-full">
                      {s.highlight}
                    </p>

                    <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                      {s.title}
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                      {s.subtitle}
                    </p>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={s.ctaLink}
                        className="px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 text-sm font-semibold"
                      >
                        {s.ctaText}
                      </a>
                      <a
                        href="/browseCars"
                        className="px-5 py-3 rounded-xl bg-white/15 text-white hover:bg-white/20 text-sm font-semibold"
                      >
                        See Listings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
