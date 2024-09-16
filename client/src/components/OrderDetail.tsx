import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../components/MenuList";
import BackToHomeButton from "../components/BackToHomeButton";
import { OrderDetailsType, OrderItem } from "../types";
const OrderDetail = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state
  const { orderId } = useParams();

  const getOrder = async () => {
    try {
      const res = await fetch(`${URL}/order/${orderId}`);
      const result = await res.json();
      setOrderItems(result.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false); // Ensure loading is set to false in case of an error
    }
  };

  useEffect(() => {
    getOrder();
  }, [orderId]); // Added orderId as a dependency

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (orderItems.length === 0) {
    return <div>No order details found.</div>; // Handle empty state
  }

  const order: OrderDetailsType = orderItems[0]; // Assuming orderItems is an array with a single order object

  return (
    <>
      <div className="flex flex-col justify-center items-center w-1/2 bg-[white] m-auto min-h-screen">
        <p className="text-l mb-6">
          Thank you so much for ordering. We will send you a notification as
          soon as your order is ready!
        </p>
        {orderItems.map((item, index) => (
          <ul key={index}>
            <li>
              <p className=" text-neutral-700">
                {" "}
                {item.name} X {item.quantity}
              </p>
            </li>
          </ul>
        ))}
        <div className="mt-7">
          <div>Order ID: {order.order_code}</div>
          <div>Order for: {order.client_name}</div>
          <div>Time of the order: {order.date_time}</div>
          <div>Total: ${order.total_cost}</div>
          <div>Order note: {order.instructions}</div>
          <div>Telephone: {order.phone_number}</div>
        </div>
        <BackToHomeButton />
      </div>
    </>
  );
};

export default OrderDetail;
