import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Login successful ✅");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful ✅");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="text-sm text-gray-600 mt-1">Welcome back to RentWheels.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
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
            Login
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="mt-3 w-full rounded-xl border py-2 font-semibold"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-gray-600">
          New here?{" "}
          <Link className="font-semibold text-red-600" to="/register">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
