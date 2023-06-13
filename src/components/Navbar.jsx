import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    {
      id: 1,
      title: "CLASSIC",
      path: "/classic",
    },
    {
      id: 2,
      title: "MOD",
      path: "/mod",
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="fixed w-full h-[20%] bg-red-500 flex justify-between items-center px-16 bg-transparent">
      <Link to="/" onClick={() => setActiveLink(0)}>
        <img
          src={Logo}
          alt=""
          className="h-[5rem] object-contain cursor-pointer"
        />
      </Link>
      <div className="flex gap-8">
        {Links.map((link) => (
          <Link
            key={link.id}
            className={`${
              activeLink === link.id
                ? "bg-[#ffffff99] px-5 py-3 rounded-3xl h-[4rem] w-[7rem] flex justify-center items-center text-purple-700 hover:ring-[15px] hover:ring-[#ffffff20] border-2 border-purple-700"
                : "bg-[#ffffff99] px-5 py-3 rounded-3xl h-[4rem] w-[7rem] flex justify-center items-center text-indigo-900 hover:ring-[15px] hover:ring-[#ffffff20] hover:text-purple-700"
            }`}
            onClick={() => setActiveLink(link.id)}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
