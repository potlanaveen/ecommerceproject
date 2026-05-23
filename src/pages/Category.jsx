import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductItems from "../components/ProductItems";

const Category = () => {
  const { products } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = products ? [...new Set(products.map((p) => p.category))] : [];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="overflow-x-hidden bg-gray-50 min-h-screen">
      <div className="py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-8">
            <a href="#/" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#/category" className="hover:underline hover:text-gray-600">
              Category
            </a>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Categories</h1>
            <p className="text-gray-600">Explore our complete product catalog</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedCategory === "all"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition capitalize ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <ProductItems key={item.id} val={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
