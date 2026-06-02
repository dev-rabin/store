import React, { useEffect, useState } from "react";
import { faHeart, faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchCategories, fetchProducts } from "../services/storeApis";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../components/ui/Loader";
import AddToCart from "../components/ui/AddToCart";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("latest");

  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [search, category]);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, sort]);

  const loadCategories = async () => {
    try {
      const categoryData = await fetchCategories();
      setCategories(categoryData || []);
    } catch (error) {
      console.log(error);
    }
  };

  const loadProducts = async () => {
    try {
      if (products.length === 0) {
        setLoading(true);
      } else {
        setProductsLoading(true);
      }
      console.log("Search:", search);
      console.log("Category:", category);
      const productData = await fetchProducts(search, category);

      setProducts(productData || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setProductsLoading(false);
    }
  };

  const filterProducts = () => {
    let data = [...products];

    if (selectedCategory) {
      data = data.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    switch (sort) {
      case "low-high":
        data.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        data.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setFilteredProducts(data);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-2 py-2">
        <p className="text-gray-500">Home / Products</p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-6 py-3 my-2 rounded-full whitespace-nowrap transition ${
              selectedCategory === ""
                ? "bg-red-500 text-white"
                : "bg-white shadow"
            }`}
          >
            All
          </button>

          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 my-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="bg-white p-6 rounded-3xl shadow h-fit sticky top-24">
            <h3 className="text-2xl font-bold mb-6">Filters</h3>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Categories</h4>

              <div className="space-y-3">
                {categories.map((category, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />

                    {category}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <p className="text-gray-500">
                Showing {filteredProducts.length} Products
              </p>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-xl px-4 py-3 mt-4 md:mt-0"
              >
                <option value="latest">Latest</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {productsLoading ? (
                <div className="col-span-full h-10 flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-52">
                      <button className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>

                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-xs uppercase text-gray-400 mb-1">
                        {product.category}
                      </p>

                      <h3
                        onClick={() => {
                          navigate(`/product-detail/${product.id}`);
                        }}
                        className="font-semibold text-gray-900 line-clamp-2 h-12 hover:underline hover:cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 text-amber-400 text-sm mt-2">
                        {[...Array(5)].map((_, index) => (
                          <FontAwesomeIcon key={index} icon={faStar} />
                        ))}
                        <span className="text-gray-500 ml-1">(24)</span>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold text-red-500">
                          ₹{product.price}
                        </span>
                        <AddToCart productId={product.id} />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                No products found.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
