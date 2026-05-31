import React from "react";
import {
  faMobileScreen,
  faLaptop,
  faHeadphones,
  faCamera,
  faGamepad,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import ViewAllBtn from "./ViewAllBtn";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    icon: faMobileScreen,
    count: "120+ Products",
  },
  {
    id: 2,
    name: "Laptops",
    icon: faLaptop,
    count: "80+ Products",
  },
  {
    id: 3,
    name: "Audio",
    icon: faHeadphones,
    count: "200+ Products",
  },
  {
    id: 4,
    name: "Gaming",
    icon: faGamepad,
    count: "95+ Products",
  },
  {
    id: 5,
    name: "Camera",
    icon: faCamera,
    count: "65+ Products",
  },
  {
    id: 6,
    name: "Smart Watch",
    icon: faClock,
    count: "110+ Products",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <Heading title="Categories" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Browse By Category</h2>
        <ViewAllBtn />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
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
            "
          >
            {/* Gradient Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Decorative Circle */}
            <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition duration-700"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
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
                  icon={category.icon}
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
                "
              >
                {category.name}
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
                {category.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
