const testimonials = [
  {
    name: "Ayesha Rahman",
    quote:
      "Booked a sedan for 3 days—pickup was smooth and the car details were accurate. Loved the clear pricing.",
  },
  {
    name: "Tanvir Hossain",
    quote:
      "The Available/Booked badge helped a lot. I could quickly choose a car that was actually available.",
  },
  {
    name: "Michael Brown",
    quote:
      "Great experience with a local provider. Support was responsive and the booking confirmation was instant.",
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
          Real rental experiences from our users.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border p-6 shadow-sm">
              <p className="text-sm text-gray-700 leading-relaxed">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
