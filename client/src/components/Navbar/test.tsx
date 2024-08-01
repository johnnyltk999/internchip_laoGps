import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp as faWhatsappBrand } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-24 text-black ">
        <a href="Home">
          <div className="flex items-center w-full text-2xl font-bold">
            <h1>lao dictionary</h1>
          </div>
        </a>

        <ul className="hidden md:flex font-bold space-x-4">
          <li className="p-4 hover:text-[#1178bb] duration-500">
            <a href="#Home">Home</a>
          </li>
          <li className="p-4 hover:text-[#1178bb] duration-500">
            <a href="#Product">Products</a>
          </li>
          <li className="p-4 hover:text-[#1178bb] duration-500">
            <a href="#About">About</a>
          </li>

          <li className="p-4 hover:text-[#1178bb] duration-500">
            <a
              href="https://wa.me/2028260606"
              target="_blank"
              className="flex items-center hover:text-[#25D366] duration-500"
            >
              <FontAwesomeIcon
                icon={faWhatsappBrand}
                size="xl"
                className="mr-2"
              />
              <span>Whatsapp</span>
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          <FontAwesomeIcon icon={nav ? faTimes : faBars} size="2x" />
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffff] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#1778bb] m-4">Menu</h1>
        <li className="p-4 border-b border-gray-600">
          <a href="#Home">Home</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#Product">Products</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#About">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
