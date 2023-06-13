import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-full top-0 h-[20%] bg-red-500 flex justify-between items-center px-16 bg-transparent">
      <div>
        <img
          src={Logo}
          alt=""
          className="h-[5rem] object-contain cursor-pointer"
        />
      </div>
      <div className="flex gap-8">
        <Link
          className="bg-[#ffffff] px-5 py-3 rounded-3xl h-[4rem] w-[7rem] flex justify-center items-center text-indigo-900 hover:ring-[15px] hover:ring-[#ffffff20] hover:text-purple-700"
          to={"/classic"}
        >
          Classic
        </Link>
        <Link
          className="bg-[#ffffff] px-5 py-3 rounded-3xl h-[4rem] w-[7rem] flex justify-center items-center text-indigo-900 hover:ring-[15px] hover:ring-[#ffffff20] hover:text-purple-700"
          to={"/mod"}
        >
          Mod
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
