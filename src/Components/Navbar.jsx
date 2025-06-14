import logo from "../assets/logo.png";
import { navItems } from "../assets/constants.jsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" navbar sticky top-0 border-b border-neutral-700/80 backdrop-blur z-20">
        <div className="container relative text-sm px-4 py-2 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-10 mr-2" />
              <span className="text-xl tracking-light">VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}> {item.label} </a>
                </li>
              ))}
            </ul>
            <div
              className="hidden lg:flex justify-center
                    space-x-12 items-center"
            >
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 border rounded-md bg-gradient-to-r
                         from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
          {isOpen && (
            <div
              className="z-20 relative right-0 bg-neutral-900 flex-col
                    lg:hidden flex items-center justify-center rounded-3xl p-3
                    space-y-3 "
            >
                <ul className="space-y-1.5 ">
                    {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
                </ul>
                <div className="flex space-x-6 p-3 ">
                    <a href='#' className="px-3 py-1 border rounded-md">
                        Sign In
                    </a>
                    <a href='#' className="px-3 py-1 border rounded-md
                    bg-gradient-to-r from-orange-500 to-orange-800">
                        Sign In
                    </a>
                </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
