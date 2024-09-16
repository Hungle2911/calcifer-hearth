import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-[#ffb238] flex w-full h-[100px] items-start justify-between fixed text-[#00202e] z-10 px-[1.5em] left-0 top-0">
      <div className="flex h-full z-10 pl-2.5 items-center">
        <img
          src="https://mystickermania.com/cdn/stickers/anime/howls-castle-calcifer-512x512.png"
          alt="Calcifer Logo"
          className="h-[80px] w-[80px] object-contain"
        />
        <h1 className="text-[25px] font-bold ml-4">Calcifer's Hearth</h1>
      </div>

      <div className="flex justify-end items-center w-[30%] gap-[15px] text-[1.3em] mt-[30px] pr-2.5">
        <Link to="/" className="btn-cart">
          <p className="hover:text-[#f55536]">Home</p>
        </Link>
        <p className="hover:text-[#f55536]">Contact Us</p>
        <Link to="/menu_items" className="btn-cart">
          <p className="hover:text-[#f55536]">Menu</p>
        </Link>
        <p className="hover:text-[#f55536]">Login</p>
        <Link to="/cart" className="btn-cart">
          <i className="fa-solid fa-cart-shopping hover:text-[#f55536]" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
