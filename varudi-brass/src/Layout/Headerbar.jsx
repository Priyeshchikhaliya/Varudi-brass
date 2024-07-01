import { Link } from "react-router-dom";
import Logo from "../assets/Varudi brass.png";

function Headerbar() {
  return (
    <nav className="w-full px-[32px] flex items-center justify-between min-h-[72px] border-b border-b-[#E5E8EB] bg-white">
      <Link to="/home">
        <div className="flex items-center gap-2">
          <img
            className="cursor-pointer h-[60px] w-[60px] rounded-md"
            src={Logo}
            alt="Varudi Brass"
          />
          <p className="cursor-pointer select-none text-logo">Varudi Brass</p>
        </div>
      </Link>
      <div className="flex gap-2 items-center text-[18px] text-orange-600">
        <Link to="/home">
          <p className="cursor-pointer font-bold border-r border-orange-600 pr-2">
            Home
          </p>
        </Link>
        <Link to="/products">
          <p className="cursor-pointer font-bold border-r border-orange-600 pr-2">
            Products
          </p>
        </Link>
        <Link to="/about">
          <p className="cursor-pointer font-bold border-r border-orange-600 pr-2">
            About us
          </p>
        </Link>
        <Link to="/contact-us">
          <p className="cursor-pointer font-bold">Contact us</p>
        </Link>
      </div>
    </nav>
  );
}

export default Headerbar;
