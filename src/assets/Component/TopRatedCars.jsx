const topRated = [
  {
    name: "Tesla Model 3",
    note: "Top pick for smooth electric driving & modern features.",
  },
  {
    name: "Toyota RAV4",
    note: "Reliable SUV for family trips and weekend travel.",
  },
  {
    name: "BMW 5 Series",
    note: "Premium comfort for business travel and long drives.",
  },
];

export default function TopRatedCars() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Top Rated Cars
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Popular choices based on user preference and rental comfort.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {topRated.map((c) => (
          <div key={c.name} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-bold text-gray-900">{c.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{c.note}</p>
            <p className="mt-4 text-xs text-gray-500">
              Tip: Compare category & daily rent before booking.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
