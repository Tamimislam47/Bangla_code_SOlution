const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black px-6 py-4 text-white font-poppins ">
      <div className="max-w-[90%] w-full mx-auto flex justify-between items-center">

        <div className="text-3xl font-bold">
          <a href="/" className="flex items-center">
            <img src="/public/images/logo.svg" alt="Logo" className="w-72" />
          </a>
        </div>

  
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-20">
            <li className="group relative">
              <a href="/" className="hover:text-blue-400 text-xl">
                Home
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-28 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </li>
            <li className="group relative">
              <a href="/" className="hover:text-blue-400 text-xl">
                Pages
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </li>
            <li className="group relative">
              <a href="/" className="hover:text-blue-400 text-xl">
                Services
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </li>
            <li className="group relative">
              <a href="/" className="hover:text-blue-400 text-xl">
                Blog
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </li>
            <li className="group relative">
              <a href="/" className="hover:text-blue-400 text-xl">
                Contact
              </a>
              <img
                src="/images/menu-hover.png"
                alt="Underline"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
