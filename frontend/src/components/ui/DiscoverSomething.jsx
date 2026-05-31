import React from "react";
import { faHeart, faEye, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  {
    id: 1,
    name: "Wireless Power Bank",
    image: "https://images.unsplash.com/photo-1609592806596-b43c0b6b5b72?w=500",
    price: 1299,
    oldPrice: 2499,
  },
  {
    id: 2,
    name: "boAt Airdopes 311 Pro",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: 899,
    oldPrice: 4990,
  },
  {
    id: 3,
    name: "Gaming Earbuds",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    price: 799,
    oldPrice: 3999,
  },
  {
    id: 4,
    name: "Mustang TWS Earbuds",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    price: 999,
    oldPrice: 1999,
  },
  {
    id: 5,
    name: "65W Fast Charger",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    price: 799,
    oldPrice: 2999,
  },
];

const DiscoverProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-gray-900 mb-14">
        Discover Something New.
      </h2>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-200">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              group
              relative
              bg-white
              border-r
              border-b
              border-gray-200
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:z-10
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            "
          >
            {/* Action Buttons */}
            <div
              className="
                absolute
                top-4
                right-4
                z-20
                flex
                flex-col
                gap-2
                opacity-0
                translate-x-6
                group-hover:translate-x-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>

              <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faRotate} />
              </button>

              <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-[300px]
                  object-contain
                  p-6
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:rotate-2
                "
              />

              {/* Add To Cart */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  translate-y-full
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >
                <button className="w-full bg-black text-white py-3 font-medium hover:bg-red-500 transition">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900 line-clamp-2 min-h-[55px]">
                {product.name}
              </h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-gray-400 line-through text-lg">
                  ₹{product.oldPrice}
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverProducts;
