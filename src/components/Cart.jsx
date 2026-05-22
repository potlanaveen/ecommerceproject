import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCartAction } from "../redux/actions/cart";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const deleteItem = (id)=>
  {
    dispatch(removeCartAction(id))
  }
  let subtotal = 0;
    cartItems.map(product => {
        subtotal += product.qty * product.price;
    })
  return (
    <div>
        <div className="fixed w-3/4 max-w-md p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg right-2 top-24 bg-white text-gray-900 dark:text-white dark:bg-gray-800 overflow-y-auto h-4/6 z-20">
        <div className="flex items-center justify-between mb-6">
          <h5 className="text-xl font-bold leading-none select-none">Shopping Cart</h5>
          <div className="flex gap-3">
            <a
              href="#/"
              className="text-sm font-medium text-custom-green hover:underline"
            >
              View all
            </a>
            <button className="self-center cursor-pointer hover:opacity-70 transition-opacity">
              <AiOutlineClose
                size={20}
                onClick={() => dispatch({ type: "DRAWER", payload: false })}
              />
            </button>
          </div>
        </div>
        
      {
        cartItems?.length > 0 ? (
          cartItems.map((cart,i) =>(
            
          <div className="flow-root" key={i}>
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-4 sm:py-5">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16 object-contain bg-gray-50 dark:bg-gray-700 rounded p-2"
                      src={cart?.image}
                      alt={cart?.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">{cart?.title} <span className="text-custom-green">({cart?.qty})</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                      {cart?.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold">
                    ${(cart?.price * cart?.qty).toFixed(2)}
                  </div>
                  <button className="text-red-500 hover:text-red-700 text-xs font-medium transition" onClick={()=> deleteItem(cart.id)}>Remove</button>
                </div>
              </li>
            </ul>
            
          </div>
        
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
          </div>
        )
      }
      <div className="border-t border-gray-200 dark:border-gray-700 px-0 py-6">
              <div className="flex justify-between text-base font-medium mb-4">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-custom-green hover:bg-custom-dark-green px-6 py-3 text-base font-medium text-black shadow-sm transition">Checkout</a>
              </div>
              <div className="mt-2 flex justify-center text-center text-sm text-gray-500 flex-col">
                <p> or</p>
                <p>
                  <button type="button" className="font-medium text-custom-dark-green hover:text-green-700 mt-2" onClick={()=>dispatch({ type: "DRAWER", payload: false })}>
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Cart;
