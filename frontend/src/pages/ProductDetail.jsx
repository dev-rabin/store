import React, { useEffect, useState } from "react";
import {
  faHeart,
  faStar,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/storeApis";
import AddToCart from "../components/ui/AddToCart";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await fetchProduct(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-gray-500 mb-8">
          Home / Products / {product.category}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <span className="inline-block px-4 py-2 bg-red-100 text-red-500 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold mt-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>

              <span className="ml-3 text-gray-500">(24 Reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-5xl font-bold text-red-500">
                ₹{product.price}
              </span>

              <span className="ml-4 text-xl text-gray-400 line-through">
                ₹{product.price + 2000}
              </span>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Description</h3>

              <p className="text-gray-600 leading-relaxed">{product.desc}</p>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Quantity</h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-12 h-12 rounded-xl bg-white shadow"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-xl bg-white shadow"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <AddToCart productId={product.id} />

            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-2xl p-4 shadow">
                <h4 className="font-semibold">Free Delivery</h4>
                <p className="text-gray-500 text-sm mt-1">
                  On orders above ₹999
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow">
                <h4 className="font-semibold">7 Days Return</h4>
                <p className="text-gray-500 text-sm mt-1">
                  Easy replacement policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            Reuse your TodayDeal/Product Card here
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default ProductDetails;
