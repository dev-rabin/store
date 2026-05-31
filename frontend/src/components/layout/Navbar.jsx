import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="max-w-7xl mx-auto py-5 px-2 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-wide text-black">
          Shoppy
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-red-500 transition duration-200">
            Home
          </Link>

          <Link
            to="/contact"
            className="hover:text-red-500 transition duration-200"
          >
            Contact
          </Link>

          <Link
            to="/about"
            className="hover:text-red-500 transition duration-200"
          >
            About
          </Link>

          <Link
            to="/signup"
            className="hover:text-red-500 transition duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <div className="relative hidden lg:block">
            <input
              type="search"
              placeholder="Search products..."
              className="w-72 bg-gray-100 rounded-lg py-3 pl-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-red-400"
            />

            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          <button className="relative hover:scale-110 transition">
            <FontAwesomeIcon icon={faHeart} className="text-xl text-gray-700" />
          </button>

          <button className="relative hover:scale-110 transition">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-gray-700"
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </nav>

      <hr className="border-gray-200" />
    </>
  );
}
