import React, { useState, useEffect } from "react";
import { URL } from "./MenuList";
import { useOrderContext } from "../context/OrderContext";
function InfoForm() {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { orderId, setOrderId } = useOrderContext();
  const sendCartOrder = async (e) => {
    e.preventDefault();
    try {
      const phone_number = phoneNumber;
      const client_name = name;
      const body = { client_name, instructions, phone_number };
      // console.log(body);
      const response = await fetch(`${URL}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      setOrderId(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (orderId !== null) {
      window.location = `/order/${orderId}`;
      console.log(orderId);
    }
  }, [orderId]);
  return (
    <form
      id="orderForm"
      className="flex flex-col gap-4 items-end text-base text-[#003f5c] mt-4 bg-white border border-gray-300 rounded-lg p-4 w-full md:w-[40%] mx-auto md:ml-auto"
      onSubmit={sendCartOrder}
    >
      <label htmlFor="customerName">Name</label>
      <input
        type="text"
        id="customerName"
        placeholder="Your name"
        required=""
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-[#FFB238]"
      />
      <label htmlFor="instruction">Special instructions</label>
      <input
        type="text"
        id="instruction"
        placeholder="Please let us know if you have any allergies"
        onChange={(e) => setInstructions(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-[#FFB238]"
      />
      <label htmlFor="customerPhone">Phone Number</label>
      <input
        type="tel"
        id="customerPhone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="xxx-xxx-xxxx"
        required=""
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-[#FFB238]"
      />
      <button
        id="placeOrderButton"
        type="submit"
        className="submit-button bg-[#FFB238] text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-yellow-500 focus:outline-none focus:border-2 focus:border-[#FFB238]"
      >
        Place Order
      </button>
    </form>
  );
}

export default InfoForm;
