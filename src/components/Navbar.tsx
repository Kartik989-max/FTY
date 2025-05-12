import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-center py-1 text-sm">
        WELCOME TO SAHARA COSMETICS THEME
      </div>

      {/* Main Navbar */}
      <div className="bg-transparent text-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-white/30">
        {/* Left Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">Bestsellers</a>
          <a href="#" className="hover:underline">Skincare</a>
          <a href="#" className="hover:underline">Body &amp; hand</a>
          <a href="#" className="hover:underline">Hair</a>
        </nav>

        {/* Logo */}
        <div className="text-center text-lg md:text-xl font-serif tracking-wide">
          <span className="uppercase">Sahara</span><sup className="text-xs">™</sup><br />
          <span className="italic">Cosmetics</span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden md:inline">EUR | €</span>
          <a href="#" className="hidden md:inline hover:underline">Blog</a>
          <a href="#" className="hidden md:inline hover:underline">About</a>
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
