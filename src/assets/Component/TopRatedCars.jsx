import { useEffect, useState } from "react";
import axiosPublic from "../../assets/axiosPublic";
import { Link } from "react-router-dom";

export default function TopRatedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        // available + newest (limit 3)
        const { data } = await axiosPublic.get("/cars", {
          params: { status: "available", sort: "newest", limit: 3 },
        });
        setCars(data);
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Picks</h2>
      <p className="text-sm text-gray-600 mt-2">
        Fresh available listings recommended for comfort & value.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cars.map((car) => (
          <div key={car._id} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            <img src={car.imageUrl} alt={car.name} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-gray-900">{car.name}</h3>
              <p className="mt-2 text-sm text-gray-600">
                ${car.rentPricePerDay}/day • <span className="capitalize">{car.category}</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Provider: <span className="text-gray-700">{car.providerName}</span>
              </p>
              <Link
                to={`/cars/${car._id}`}
                className="mt-4 inline-block w-full text-center px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 text-sm font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
