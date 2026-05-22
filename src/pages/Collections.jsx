import React from "react";
import { useSelector } from "react-redux";
import ProductItems from "../components/ProductItems";

const Collections = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="overflow-x-hidden bg-gray-50 dark:bg-custom-dark min-h-screen">
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
            <a href="#/collections" className="hover:underline hover:text-gray-600">
              Collections
            </a>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Exclusive Collections</h1>
            <p className="text-gray-600 dark:text-gray-400">Curated collections of our best products</p>
          </div>

          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((item) => (
                <ProductItems key={item.id} val={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No products in collections.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
