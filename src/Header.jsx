import { Link } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import Dropdown3 from "./Dropdown3";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="header lg:mx-8 mx-6 mt-5">
        <h1 className="text-[#FC4308] md:hidden block font-bold md:text-[22px] sm:text-[20px] 2small:text-[18px]">
          <Link to={"/"}>MEGA.news</Link>
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <div
          className={`lg:text-[16px] md:text-[14px] flex md:items-center justify-between md:pb-0 pb-12 absolute md:static md:bg-white 2small:bg-gray-50 md:z-auto z-50 left-0 w-full 
                md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-20 opacity-100" : "top-[-490px]"
                } md:opacity-100 opacity-0 `}
        >
          {/* First-Section  */}

          <div className="first-section flex items-center lg:gap-6 gap-3">
            <h1 className="text-[#FC4308] hidden md:block font-bold lg:text-[22px] text-[16px]">
              <Link to={"/"}>MEGA.news</Link>
            </h1>
            <nav>
              <ul className="md:flex md:items-center lg:gap-5 gap-3">
                <li>
                  <Link to={"/category"} className="lg:text-[16px] md:text-[12px] 2small:text-[12px] text-[#3E3232] font-medium">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to={"/profile-marked"} className="lg:text-[16px] md:text-[12px] 2small:text-[12px] text-[#3E3232] font-medium">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contactUs"}
                    className="lg:text-[16px] md:text-[12px] 2small:text-[12px] text-[#3E3232] font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={"/aboutUs"} className="lg:text-[16px] md:text-[12px] 2small:text-[12px] text-[#3E3232] font-medium">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Second-Section  */}

          <div className="second-section flex md:flex-row flex-col lg:gap-4 md:gap-2 gap-4">
            <div className="flex items-center justify-between px-3 md:bg-[#F5F5F5] bg-[#eeeded] md:rounded-xl rounded-lg lg:w-[270px] md:w-[200px] md:h-[48px] sm:w-[220px] sm:h-[35px] 2small:w-[150px] 2small:h-[32px]">
              <div className="flex items-center gap-2">
                <BsThreeDotsVertical className="text-[#3E3232BF]" size={20} />
                <input
                  type="search"
                  placeholder="Search Anything"
                  className="focus:outline-none w-full placeholder:sm:text-[12px] placeholder:2small:text-[10px] placeholder:text-[#3E3232BF] sm:text-[12px] 2small:text-[10px]"
                />
              </div>
              <FaSearch className="text-[#3E3232]" />
            </div>
            <div className="flex items-center lg:gap-2 ">
              <Dropdown3 />

              <div className="rounded-xl md:bg-[#F5F5F5] bg-[#eeeded] lg:w-[48px] lg:h-[48px] w-[40px] h-[40px] flex items-center justify-center">
                <MdOutlineBookmarkBorder className="text-[#3E3232]" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
