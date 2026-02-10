import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function AddCar() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Sedan",
    rentPricePerDay: "",
    location: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      rentPricePerDay: Number(form.rentPricePerDay),
      providerName: user?.displayName,
      providerEmail: user?.email,
    };

    try {
      await axios.post(`${baseURL}/cars`, payload);
      toast.success("Car added successfully ✅");
      setForm({
        name: "",
        description: "",
        category: "Sedan",
        rentPricePerDay: "",
        location: "",
        imageUrl: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to add car");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Add Car</h2>
        <p className="text-sm text-gray-600 mt-1">
          List your car for rent on RentWheels.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="text-sm font-semibold">Car Name</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g., Toyota Corolla 2021"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-semibold">Description</label>
            <textarea
              className="mt-1 w-full border rounded-xl px-3 py-2 min-h-[110px]"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              placeholder="Write a real description about the car..."
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Category</label>
            <select
              className="mt-1 w-full border rounded-xl px-3 py-2"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Luxury</option>
              <option>Electric</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Rent Price (per day)</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              name="rentPricePerDay"
              value={form.rentPricePerDay}
              onChange={handleChange}
              required
              type="number"
              min="1"
              placeholder="e.g., 45"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Location</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="e.g., Dhaka"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Hosted Image URL</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              required
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Provider Name</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2 bg-gray-50"
              value={user?.displayName || ""}
              readOnly
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Provider Email</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2 bg-gray-50"
              value={user?.email || ""}
              readOnly
            />
          </div>

          <button className="md:col-span-2 w-full rounded-xl bg-black text-white py-2 font-semibold">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
}
