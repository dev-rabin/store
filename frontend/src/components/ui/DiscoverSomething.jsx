import React, { useEffect, useState } from "react";
import { faHeart, faEye, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewAllBtn from "./ViewAllBtn";
import Heading from "./Heading";
import Loader from "./Loader";
import { fetchNewArrivals } from "../../services/storeApis";

const DiscoverProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchNewArrivals();
      setProducts(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <Heading title="New" />

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Discovered Something New</h2>
        <ViewAllBtn />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-200">
        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loader />
          </div>
        ) : (
          products.map((product) => (
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

              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={product.img}
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

              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-2 min-h-[55px]">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-gray-400 line-through text-lg">
                    ₹{product.old_price || product.price}
                  </span>

                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default DiscoverProducts;
