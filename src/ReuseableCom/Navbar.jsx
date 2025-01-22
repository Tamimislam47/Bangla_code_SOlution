import React from "react";

const Navbar = () => {
  return (
    <nav className="font-poppins flex items-center justify-between bg-black px-6 py-4 text-white">
      <div className="mx-auto flex w-full max-w-[90%] items-center justify-between">
        <div className="text-3xl font-bold">
          <a href="/" className="flex items-center">
            <img src="/public/images/logo.svg" alt="Logo" className="w-72" />
          </a>
        </div>

        <div className="flex flex-1 justify-center">
          <ul className="flex space-x-20">
            <li className="group relative">
              <a href="/" className="text-xl hover:text-blue-400">
                Home
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute left-1/2 top-full mt-1 h-2 w-28 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li className="group relative">
              <a href="/" className="text-xl hover:text-blue-400">
                Pages
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute left-1/2 top-full mt-1 h-2 w-16 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li className="group relative">
              <a href="/" className="text-xl hover:text-blue-400">
                Services
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute left-1/2 top-full mt-1 h-2 w-16 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li className="group relative">
              <a href="/" className="text-xl hover:text-blue-400">
                Blog
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute left-1/2 top-full mt-1 h-2 w-16 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
            <li className="group relative">
              <a href="/" className="text-xl hover:text-blue-400">
                Contact
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute left-1/2 top-full mt-1 h-2 w-16 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
