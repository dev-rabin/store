import React, { useEffect, useRef, useState } from "react";
import {
  faMobileScreen,
  faLaptop,
  faHeadphones,
  faCamera,
  faGamepad,
  faClock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import ViewAllBtn from "./ViewAllBtn";
import { fetchCategories } from "../../services/storeApis";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const iconMap = {
  Mobiles: faMobileScreen,
  Laptops: faLaptop,
  Audio: faHeadphones,
  Earbuds: faHeadphones,
  Camera: faCamera,
  Gaming: faGamepad,
  "Smart Watch": faClock,
  Charger: faMobileScreen,
  "Power Bank": faMobileScreen,
};

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const scrollRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data || []);
      } catch (err) {
        setError("Failed to load categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -1200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <Heading title="Categories" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Browse By Category</h2>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <ViewAllBtn />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-5 px-2"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white
              p-6
              cursor-pointer
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              hover:-translate-y-3
              transition-all
              duration-500
              flex-shrink-0
              w-[180px]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition duration-700"></div>

            <div
              className="relative z-10 flex flex-col items-center"
              onClick={() =>
                navigate(`/products?category=${encodeURIComponent(category)}`)
              }
            >
              <div
                className="
                  w-20 h-20
                  rounded-2xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition
                  duration-500
                  group-hover:bg-white/20
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                <FontAwesomeIcon
                  icon={iconMap[category] || faMobileScreen}
                  className="
                    text-4xl
                    text-gray-700
                    group-hover:text-white
                    transition
                  "
                />
              </div>

              <h3
                className="
                  font-semibold
                  text-gray-900
                  group-hover:text-white
                  transition
                  text-center
                "
              >
                {category}
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500
                  mt-2
                  group-hover:text-white/80
                  transition
                "
              >
                Products
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
