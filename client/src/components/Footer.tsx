const Footer = () => {
  return (
    <footer className="bg-[#8a508f] flex items-center justify-between w-screen h-[125px] text-[white] mt-auto px-[1.5em]">
      <div className="flex items-baseline gap-[15px] text-[1.3em]">
        <h3>Find us here!</h3>
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-x-twitter" />
      </div>
      <div className="flex flex-col items-end text-[1em] ">
        <p>123 Howl's Castle</p>
        <p>Toronto, Ontario LOL OLO</p>
      </div>
    </footer>
  );
};
export default Footer;
