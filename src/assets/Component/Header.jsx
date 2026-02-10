import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const navClass = ({ isActive }) =>
  isActive
    ? "text-black font-semibold"
    : "text-gray-600 hover:text-black";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // বাইরে click করলে dropdown বন্ধ
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out ✅");
      setOpen(false);
      navigate("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
         <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="RentWheels logo"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="text-xl font-bold">RentWheels</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/browseCars" className={navClass}>Browse Cars</NavLink>

          {/* Private Routes links (visible, but route guard will protect) */}
          <NavLink to="/addCar" className={navClass}>Add Car</NavLink>
          <NavLink to="/myListings" className={navClass}>My Listings</NavLink>
          <NavLink to="/myBookings" className={navClass}>My Bookings</NavLink>
        </nav>

        {/* Right side: Login OR Profile */}
        {!user ? (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl bg-black text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-xl border"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="h-10 w-10 rounded-full overflow-hidden border"
              title="Profile"
            >
              <img
                src={user.photoURL || "https://i.ibb.co/2kRZg6b/user.png"}
                alt="user"
                className="h-full w-full object-cover"
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border bg-white shadow-lg p-3">
                <p className="font-semibold text-sm">
                  {user.displayName || "User"}
                </p>
                <p className="text-xs text-gray-600 break-all">
                  {user.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="mt-3 w-full px-3 py-2 rounded-xl bg-gray-900 text-white"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile menu (simple) */}
      <div className="md:hidden border-t">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-3 text-sm">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/browseCars" className={navClass}>Browse Cars</NavLink>
          <NavLink to="/addCar" className={navClass}>Add Car</NavLink>
          <NavLink to="/myListings" className={navClass}>My Listings</NavLink>
          <NavLink to="/myBookings" className={navClass}>My Bookings</NavLink>
        </div>
      </div>
    </header>
  );
}
