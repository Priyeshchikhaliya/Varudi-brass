import Logo from "../assets/Varudi brass.png";

function Headerbar(props) {
  return (
    <>
      <nav
        className={`relative w-full top-0 px-[32px] flex items-center justify-between min-h-[72px]`}
      >
        <div className="flex items-center gap-2">
          <img
            className="cursor-pointer h-[60px] w-[60px] rounded-md"
            src={Logo}
          />
          <p className="cursor-pointer select-none text-logo">Varudi Brass</p>
        </div>
        <div>
          <p>Home</p>
          <p>Products</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      </nav>
    </>
  );
}

export default Headerbar;
