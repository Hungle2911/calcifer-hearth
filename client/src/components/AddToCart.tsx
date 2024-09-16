import { URL } from "./MenuList";
function AddToCart({ item }) {
  const sendItemsToCart = async (item) => {
    try {
      const menu_item_id = item.id;
      const quantity = 1;
      const body = { menu_item_id, quantity };
      // console.log(body);
      const response = await fetch(`${URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 hover:text-yellow-500 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      role="button"
      onClick={() => {
        sendItemsToCart(item);
      }}
    >
      <i className="fas fa-utensils mr-2"></i>
      Add to Cart
    </button>
  );
}

export default AddToCart;
