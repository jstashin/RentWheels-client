import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full rounded-2xl border bg-white p-8 shadow-sm text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-5 py-3 rounded-xl bg-black text-white font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
