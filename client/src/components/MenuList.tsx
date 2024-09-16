import { useQuery } from "@tanstack/react-query";
import AddToCart from "./AddToCart";

const URL = import.meta.env.VITE_API_URL;
function MenuList() {
  const getMenuItems = async () => {
    try {
      const response = await fetch(`${URL}/menu`);
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };
  const {
    status,
    error,
    data: items,
  } = useQuery({ queryKey: ["menuItems"], queryFn: getMenuItems });
  if (status == "pending") {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-9/12 bg-[white] mt-[100px] m-auto min-h-screen">
        <h1 className="text-[#003f5c] text-3xl">Our Menu</h1>
        <div className="flex w-4/5 justify-around text-xl text-[#003f5c] mt-[5px] mb-[25px] mx-0">
          <span className="category">Appetizers</span>
          <span className="category">Mains</span>
          <span className="category">Drinks</span>
          <span className="category">Desserts</span>
        </div>
        <ul
          className="flex flex-col items-center w-full h-[700px] overflow-y-auto scroll-smooth bg-[white] mt-0 mb-[1em] mx-0"
          id="foodMenu"
        >
          {items.map((item) => (
            <li
              className="flex flex-row justify-between items-center w-[95%] mb-4"
              key={item.id}
            >
              <span className="flex-shrink-0">
                <img
                  className="w-[150px] h-[100px] object-cover rounded-lg"
                  src={item.photo_url}
                  alt="menu item image"
                />
              </span>
              <span className="flex flex-col justify-center items-start text-base h-[100px] w-3/5 mx-2">
                <p className="text-[#003f5c] my-1 font-bold">{item.name}</p>
                <p className="font-nunito-sans font-normal m-0">
                  {item.description}
                </p>
              </span>
              <span className="text-lg font-medium">${item.cost}</span>
              <AddToCart item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MenuList;
export { URL };
