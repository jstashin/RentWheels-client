import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Spinner from "../Component/Spinner";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function CarDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/cars/${id}`);
        setCar(data);
      } catch (e) {
        toast.error("Failed to load car details");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const calcDays = (s, e) => {
    const sd = new Date(s);
    const ed = new Date(e);
    const diff = ed - sd;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    return isNaN(days) ? 0 : days;
  };

  const handleBooking = async () => {
    if (!startDate || !endDate) return toast.error("Please select start and end date");

    const totalDays = calcDays(startDate, endDate);
    if (totalDays <= 0) return toast.error("Invalid date range");

    const payload = {
      carId: car._id,
      userEmail: user.email,
      userName: user.displayName || "",
      startDate,
      endDate,
      totalDays,
      totalPrice: totalDays * car.rentPricePerDay,
    };

    try {
      const res = await axios.post(`${baseURL}/bookings`, payload);
      toast.success(res.data?.message || "Booking confirmed ✅");
      // refresh details (status will become booked)
      const { data } = await axios.get(`${baseURL}/cars/${id}`);
      setCar(data);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Booking failed");
    }
  };

  if (loading) return <Spinner />;
  if (!car) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-[360px] object-cover rounded-2xl border"
        />

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">{car.name}</h2>
              <p className="text-sm text-gray-600 mt-1 capitalize">
                {car.category} • {car.location}
              </p>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full capitalize ${
                car.status === "booked"
                  ? "bg-gray-200 text-gray-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {car.status}
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-700 leading-relaxed">{car.description}</p>

          <p className="mt-4 text-lg font-semibold">
            ${car.rentPricePerDay} <span className="text-sm font-normal text-gray-600">/ day</span>
          </p>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm font-semibold">Provider Info</p>
            <p className="text-sm text-gray-700 mt-1">{car.providerName}</p>
            <p className="text-sm text-gray-600">{car.providerEmail}</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Start Date</label>
              <input
                type="date"
                className="mt-1 w-full border rounded-xl px-3 py-2"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">End Date</label>
              <input
                type="date"
                className="mt-1 w-full border rounded-xl px-3 py-2"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleBooking}
            disabled={car.status === "booked"}
            className={`mt-4 w-full rounded-xl py-2 font-semibold text-white ${
              car.status === "booked"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {car.status === "booked" ? "Already Booked" : "Book Now"}
          </button>
        </div>
      </div>
    </section>
  );
}
