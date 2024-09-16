import { useCartContext } from "../context/CartContext";
import { useEffect } from "react";
import { CartItem } from "../types";
function CartItems() {
  const {
    cartItems,
    totalPrice,
    deleteCartItems,
    getCartItems,
    increaseCartItem,
    decreaseCartItem,
  } = useCartContext();

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      <h1 className="text-2xl text-[#003f5c] mb-4">Cart</h1>
      <ul
        id="foodCart"
        className="flex flex-col items-center w-full h-fit overflow-y-auto scroll-smooth bg-white mt-0 mb-4 mx-0 pt-4"
      >
        {cartItems.map((item: CartItem) => (
          <li
            className="flex flex-row justify-between items-center w-[95%] mb-4 mx-0 border-b border-gray-200 pb-4"
            key={item.cart_id}
          >
            <div className="flex-shrink-0 w-[250px]">
              <img
                className="w-full h-[100px] object-cover rounded-lg"
                src={item.photo_url}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col justify-center flex-grow ml-4">
              <p className="cart-item-name text-[#003f5c] font-bold">
                {item.name}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[30%] text-center">
              <p className="text-lg font-medium text-[#003f5c]">${item.cost}</p>
              <div className="flex items-center mt-2">
                {item.quantity > 1 && (
                  <button
                    className="bg-white text-[#FFB238] font-medium py-1 px-4 rounded-full shadow-md hover:bg-[#F6F9FE] focus:outline-none focus:border-2 focus:border-[#FFB238] mx-1"
                    onClick={() => decreaseCartItem(item.cart_id, item.item_id)}
                  >
                    -
                  </button>
                )}
                <span className="mx-2 text-lg font-bold">{item.quantity}</span>
                <button
                  className="bg-white text-[#FFB238] font-medium py-1 px-4 rounded-full shadow-md hover:bg-[#F6F9FE] focus:outline-none focus:border-2 focus:border-[#FFB238] mx-1"
                  onClick={() => increaseCartItem(item.cart_id, item.item_id)}
                >
                  +
                </button>
              </div>
              <button
                className="deleteCart bg-red-500 text-white font-medium py-1 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:border-2 focus:border-red-600 mt-4"
                onClick={() => deleteCartItems(item.cart_id, item.item_id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        id="totalPrice"
        className="cart-total flex justify-end w-full px-8 py-4 bg-gray-100"
      >
        <p className="total-amount text-xl font-bold text-[#003f5c]">
          Total Price: ${totalPrice}
        </p>
      </div>
    </>
  );
}

export default CartItems;
