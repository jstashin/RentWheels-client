import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Password validation function
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // 🔐 Password check
    const error = validatePassword(password);
    if (error) {
      toast.error(error);
      return;
    }

    try {
      // 1️⃣ Create user
      await createUser(email, password);

      // 2️⃣ Update profile (name + photo)
      await updateUserProfile(name, photoURL);

      toast.success("Account created successfully 🎉");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Registration failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google signup successful ✅");
      navigate("/");
    } catch (err) {
      toast.error("Google signup failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Register</h2>
        <p className="text-sm text-gray-600 mt-1">
          Create your RentWheels account
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Photo URL</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              className="mt-1 w-full border rounded-xl px-3 py-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="******"
            />
          </div>

          <button className="w-full rounded-xl bg-black text-white py-2 font-semibold">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="mt-3 w-full rounded-xl border py-2 font-semibold"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link className="font-semibold text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
