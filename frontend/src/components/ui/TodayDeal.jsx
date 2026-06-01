import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ViewAllBtn from "./ViewAllBtn";
import Heading from "./Heading";
import { fetchProducts } from "../../services/storeApis";
import AddToCart from "./AddToCart";

const TodayDeal = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const randomProducts = [...data]
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);

        setProducts(randomProducts);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Heading title="Today's Deal" />

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Flash Sales</h2>
        <ViewAllBtn url="/products" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-80 overflow-hidden">
              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  SAVE {product.discount || 0}%
                </span>
              </div>

              <button className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg transition hover:bg-red-500 hover:text-white">
                <FontAwesomeIcon icon={faHeart} />
              </button>

              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 translate-y-20 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-lg whitespace-nowrap">
                  Quick View
                </button>

                <AddToCart productId={product.id} />
              </div>
            </div>

            <div className="p-6">
              <p className="mb-1 text-sm uppercase tracking-widest text-gray-400">
                {product.category || "Electronics"}
              </p>

              <h3 className="mb-3 text-lg font-semibold text-gray-900 line-clamp-1">
                {product.name}
              </h3>

              <div className="mb-4 flex items-center">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(Math.round(product.rating || 5))].map(
                    (_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} />
                    ),
                  )}
                </div>

                <span className="ml-2 text-sm text-gray-500">
                  ({product.reviews || 0})
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>

                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₹{(product.price || 0) + 40}
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
