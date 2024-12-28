
import { Search } from "lucide-react";
import HamburgerMenu from "./Hamburger";

export default function Navbar() {
  

  return (
          <div className="flex justify-between items-center" >
            <div className="ml-5 font-light text-3xl flex items-center">
              <h1>Ahmed</h1>
              <h1 className="text-[#7c4ee4]">Blog</h1>
            </div>
            <div className="lg:flex lg:items-center lg:space-x-10 md:flex md:items-center md:space-x-10 sm:flex sm:items-center sm:space-x-8 mr-5 text-lg font-extralight hidden mt-2">
              <h2> Blog</h2>
              <h2>About</h2>
              <Search />
              <button className="bg-[#7c4ee4] text-white  rounded-lg h-11 w-32">
              Contact Us
              </button>
            </div>
            <div className="lg:hidden md:hidden sm:hidden flex items-center">
              <HamburgerMenu />
            </div>
          </div>
        );
      }