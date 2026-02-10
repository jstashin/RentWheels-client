const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Weekend Traveler",
    quote:
      "The booking was super easy and the car status helped me avoid already-booked listings. Loved the experience!",
  },
  {
    name: "Tanvir Hossain",
    role: "Business Trip",
    quote:
      "Transparent daily pricing and accurate car details. I booked quickly and everything went smoothly.",
  },
  {
    name: "Michael Brown",
    role: "Family Ride",
    quote:
      "Great support and a clean UI. The provider info was clear and the booking confirmation was instant.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Customer Testimonials
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Real experiences from RentWheels users.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border p-6 shadow-sm">
              <p className="text-sm text-gray-700 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
