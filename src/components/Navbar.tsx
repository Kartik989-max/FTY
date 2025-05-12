import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";

interface NavbarProps {
  scrolled: boolean;
}
const Navbar = (scrolled: NavbarProps) => {
  return (
    <>
      <div className="text-center py-2 tracking-tight text-sm bg-gray-800 text-white shadow-md">
        WELCOME TO SAHARA COSMETICS THEME
      </div>

      {/* Main Navbar */}
      <div
        className={`py-4 px-6 md:px-12 flex items-center justify-between border-b ${
          scrolled ? "border-gray-200" : "border-white/30"
        }`}
      >
        {/* Left Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Bestsellers
          </a>
          <a href="#" className="hover:underline">
            Skincare
          </a>
          <a href="#" className="hover:underline">
            Body &amp; hand
          </a>
          <a href="#" className="hover:underline">
            Hair
          </a>
        </nav>

        {/* Logo */}
        <div className="text-center text-lg md:text-xl font-serif tracking-wide">
          <span className="uppercase">Sahara</span>
          <sup className="text-xs">™</sup>
          <br />
          <span className="italic">Cosmetics</span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden md:inline">EUR | €</span>
          <a href="#" className="hidden md:inline hover:underline">
            Blog
          </a>
          <a href="#" className="hidden md:inline hover:underline">
            About
          </a>
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
