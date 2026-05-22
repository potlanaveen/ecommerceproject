import React from "react";
import { NavLink } from "react-router-dom";
import { cartAction } from "../redux/actions/cart";
import { useDispatch } from "react-redux";

function ProductItems({ val }) {
  const dispatch = useDispatch();
  
  if (!val) return null;

  const addCart = () => {
    dispatch(cartAction(val.id, 1));
    dispatch({ type: "DRAWER", payload: true });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col hover:scale-105 transform">
      <NavLink to={`/detail/${val.id}`} className="flex-1 flex flex-col">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-4 h-48 overflow-hidden">
          <img
            className="h-40 w-40 object-contain hover:scale-110 transition-transform duration-300"
            src={val?.image}
            alt={val?.title}
          />
        </div>
        <div className="px-4 pt-4 pb-2 flex-1 flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 min-h-10">
            {val?.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize font-medium">
            {val?.category}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 flex-1">
            {val?.description}
          </p>
        </div>
      </NavLink>
      
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-custom-green dark:text-custom-green">${val?.price?.toFixed(2)}</span>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
          </div>
        </div>
        <button
          onClick={addCart}
          className="bg-custom-green hover:bg-custom-dark-green text-black font-semibold py-2 px-3 rounded-lg transition duration-300 text-xs whitespace-nowrap ml-2 hover:shadow-md active:scale-95"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductItems;
