export default function WhyRentWithUs() {
  const items = [
    {
      title: "Easy Booking",
      desc: "Find a car, choose dates, and confirm in a few clicks—simple and fast.",
    },
    {
      title: "Affordable Rates",
      desc: "Clear daily pricing with no confusing hidden charges—compare and choose confidently.",
    },
    {
      title: "Trusted Providers",
      desc: "Real provider info, car details, and transparent status (Available/Booked).",
    },
    {
      title: "24/7 Support",
      desc: "Need help during your rental? We’re available to support you anytime.",
    },
  ];

  return (
    <section className="bg-gray-50 border-y">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Rent With Us
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          A smoother way to rent cars from local providers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-white border p-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
