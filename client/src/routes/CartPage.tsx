import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartItems from "../components/CartItems";
import InfoForm from "../components/InfoForm";
const CartPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center w-9/12 bg-[white] mt-[100px] m-auto min-h-screen">
        <CartItems />
        <InfoForm />
      </div>
      <Footer />
    </>
  );
};
export default CartPage;
