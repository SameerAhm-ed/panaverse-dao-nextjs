import Image from "next/image";
import Link from "next/link";
import PanaverseLogo from "public/red-p-logo-text_dao_croped.png";

const Header = () => {
  return (
    <>
      <nav className="relative container mx-auto p-4">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              src={PanaverseLogo}
              alt="Panaverse Dao logo"
              width={80}
              height={80}
            />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Home
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Courses
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* Button */}
          <Link
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-red-700 rounded-full baseline hover:bg-red-600 md:block"
          >
            Get Started
          </Link>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About Us</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
