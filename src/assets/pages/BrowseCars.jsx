import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Component/Spinner";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function BrowseCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/cars`, {
          params: { status: "available", sort: "newest" },
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

  if (loading) return <Spinner />;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold">Browse Cars</h2>
      <p className="text-sm text-gray-600 mt-2">
        All available cars from all providers.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div key={car._id} className="rounded-2xl border bg-white overflow-hidden shadow-sm">
            <img src={car.imageUrl} alt={car.name} className="h-48 w-full object-cover" />
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
                className="mt-4 inline-block w-full text-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black text-sm font-semibold"
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
