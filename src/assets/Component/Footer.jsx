import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + Website Name */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="RentWheels logo"
                className="h-11 w-11 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white">RentWheels</h3>
                <p className="text-sm text-gray-400">Unleash Your Drive</p>
              </div>
            </Link>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Browse cars from trusted local providers, book instantly for your
              preferred dates, and enjoy smooth pickup & return.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">Email:</span>{" "}
                support@rentwheels.com
              </li>
              <li>
                <span className="text-gray-300">Phone:</span> +880 1XXX-XXXXXX
              </li>
              <li>
                <span className="text-gray-300">Address:</span> Dhaka, Bangladesh
              </li>
              <li>
                <span className="text-gray-300">Hours:</span> 24/7 Support
              </li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h4 className="text-white font-semibold">Terms & Conditions</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <Link className="hover:text-white" to="/">
                  Rental Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Safety & Insurance
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              By using RentWheels, you agree to follow our rental rules and
              provider policies.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-white font-semibold">Social Media</h4>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Follow us for offers, updates, and new listings.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RentWheels. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-gray-500">
            <Link className="hover:text-white" to="/">
              Terms
            </Link>
            <Link className="hover:text-white" to="/">
              Privacy
            </Link>
            <Link className="hover:text-white" to="/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
