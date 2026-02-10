import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Spinner from "../Component/Spinner";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function MyBookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/bookings/${user.email}`);
        setBookings(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user.email]);

  if (loading) return <Spinner />;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold">My Bookings</h2>
      <p className="text-sm text-gray-600 mt-2">
        Cars you booked recently.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {bookings.map((b) => (
          <div key={b._id} className="rounded-2xl border bg-white overflow-hidden shadow-sm">
            <img src={b.carImageUrl} alt={b.carName} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold">{b.carName}</h3>
              <p className="text-sm text-gray-600 mt-1">
                ${b.rentPricePerDay}/day • {b.startDate} → {b.endDate}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Total: <span className="font-semibold">${b.totalPrice}</span> ({b.totalDays} days)
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Provider: {b.providerName} • {b.providerEmail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <p className="mt-10 text-sm text-gray-600">No bookings found.</p>
      )}
    </section>
  );
}
