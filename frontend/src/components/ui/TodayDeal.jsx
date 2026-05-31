import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ViewAllBtn from "./ViewAllBtn";
import Heading from "./Heading";

const TodayDeal = () => {
  const products = [
    {
      id: 1,
      name: "Canon Camera",
      price: 100,
      image: "/image/iphone.jpg",
      rating: 5,
      reviews: 83,
      discount: 20,
    },
    {
      id: 2,
      name: "Sony Camera",
      price: 120,
      image: "/image/iphone.jpg",
      rating: 4,
      reviews: 65,
      discount: 15,
    },
    {
      id: 3,
      name: "Nikon Camera",
      price: 90,
      image: "/image/iphone.jpg",
      rating: 5,
      reviews: 102,
      discount: 25,
    },
    {
      id: 4,
      name: "Canon Camera",
      price: 100,
      image: "/image/iphone.jpg",
      rating: 5,
      reviews: 83,
      discount: 20,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Heading title="Today's Deal" />

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Flash Sales</h2>

        <ViewAllBtn />
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-80 overflow-hidden">
              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  SAVE {product.discount}%
                </span>
              </div>

              <button className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg transition hover:bg-red-500 hover:text-white">
                <FontAwesomeIcon icon={faHeart} />
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 translate-y-20 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-lg whitespace-nowrap">
                  Quick View
                </button>

                <button className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium shadow-lg whitespace-nowrap">
                  Add Cart
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="mb-1 text-sm uppercase tracking-widest text-gray-400">
                Electronics
              </p>

              <h3 className="mb-3 text-lg font-semibold text-gray-900 line-clamp-1">
                {product.name}
              </h3>

              <div className="mb-4 flex items-center">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(product.rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>

                <span className="ml-2 text-sm text-gray-500">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ${product.price + 40}
                  </span>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  In Stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayDeal;
