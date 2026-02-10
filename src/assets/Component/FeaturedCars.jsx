import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPublic from "../../assets/axiosPublic";

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axiosPublic.get("/cars", {
          params: { sort: "newest", limit: 6 },
        });
        setCars(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="py-14 flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Cars
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Newest listings from our providers.
          </p>
        </div>

        <Link
          to="/browseCars"
          className="text-sm font-semibold text-red-600 hover:text-red-700"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car._id}
            className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col"
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-gray-900 line-clamp-1">
                  {car.name}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full capitalize ${
                    car.status === "booked"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {car.status || "available"}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">${car.rentPricePerDay}</span> / day
                • <span className="capitalize">{car.category}</span>
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Provider:{" "}
                <span className="text-gray-700">{car.providerName}</span>
              </p>

              <div className="mt-4">
                {/* Car Details route: /cars/:id (Private) */}
                <Link
                  to={`/cars/${car._id}`}
                  className="inline-block w-full text-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black text-sm font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
