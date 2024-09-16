import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

// Define the type for the context value
interface OrderContextType {
  orderId: string | null;
  setOrderId: Dispatch<SetStateAction<string | null>>;
}

// Create the context with a default value
const OrderContext = createContext({} as OrderContextType);

// Custom hook to use the OrderContext
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

// OrderProvider component
export const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [orderId, setOrderId] = useState<string | null>(null);

  return (
    <OrderContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};
