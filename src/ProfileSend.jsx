import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaAlignLeft,
  FaLink,
  FaPlus,
  FaRegEye,
  FaRegFolder,
  FaRegImage,
  FaRegNewspaper,
  FaRegSave,
  FaRegStar,
  FaUserEdit,
} from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { CgColorPicker } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export default function ProfileSend() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Header />

      <div className="routing lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 flex items-center gap-3">
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232] cursor-pointer">
          Home
        </div>
        <div>
          <img
            src="/public/icon.png"
            alt=""
            className="md:w-[8px] md:h-[12px] small:w-[7px] small:h-[10px] 2small:w-[7px] 2small:h-[8px]"
          />
        </div>
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E323280] cursor-pointer">
          Profile Send Post
        </div>
      </div>

      <div className="bar h-[260px] bg-[#F5F5F5] rounded-xl lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 p-3">
        <div>
          <img
            src="/public/slider-img2.jpg"
            alt=""
            className="h-[150px] w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-[8px]">
            <img
              src="/public/Louis.png"
              alt=""
              className="w-[75px] h-[75px] rounded-xl"
            />

            <div className="md:text-[16px] small:text-sm font-medium text-[#3E3232] lg:flex hidden">
              Louis Hoebregts
            </div>

            {/* Tab Screens  */}

            <div className="lg:hidden sm:block hidden">
              <div className="flex items-center justify-between pb-2">
                <div className="md:text-[16px] text-sm font-medium text-[#3E3232]">
                  Louis Hoebregts
                </div>
                <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl flex items-center justify-center gap-[8px] sm:hidden">
                  <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit
                  Profile
                </div>
              </div>
              <div className="flex items-center justify-center md:gap-[60px] sm:gap-[40px] small:gap-[20px] 2small:gap-[10px]">
                <Link to={"/profile-marked"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Marked
                  </div>
                </Link>

                <div className="mb-[-5px]">
                  <Link to={"/profile-send"}>
                    <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                      Send Post
                    </div>
                  </Link>
                  <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
                </div>

                <Link to={"/profile-post"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Posts
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Screens */}

            <div className="sm:hidden block">
              <div className="flex items-center gap-[8px] pb-2">
                <div className="md:text-[16px] small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                  Louis Hoebregts
                </div>
                <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl flex items-center justify-center gap-[8px] sm:hidden">
                  <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit
                  Profile
                </div>
              </div>
              <div className="flex items-center justify-around md:gap-[60px] sm:gap-[40px] small:gap-[20px] 2small:gap-[10px]">
                <Link to={"/profile-marked"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Marked
                  </div>
                </Link>

                <div className="mb-[-5px]">
                  <Link to={"/profile-send"}>
                    <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                      Send Post
                    </div>
                  </Link>
                  <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
                </div>

                <Link to={"/profile-post"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Posts
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Screens  */}

          <div className="lg:flex items-center justify-center gap-[60px] hidden">
            <Link to={"/profile-marked"}>
              <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                Marked
              </div>
            </Link>

            <div className="mb-[-5px]">
              <Link to={"/profile-send"}>
                <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                  Send Post
                </div>
              </Link>
              <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
            </div>

            <Link to={"/profile-post"}>
              <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                Posts
              </div>
            </Link>
          </div>

          <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl sm:flex items-center justify-center gap-[8px] hidden">
            <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit Profile
          </div>
        </div>
      </div>

      <div className="SendPost container mx-auto px-2 sm:px-4 lg:px-8 my-8">
        <div className="explanation flex flex-col lg:flex-row items-start gap-6">
          {/* Left Side */}
          <div className="explain w-full lg:w-2/3">
            {/* Buttons */}
            <div className="btns flex flex-wrap gap-3 mb-6">
              <Link to={"/profile-send"}>
                <div className="send-post px-4 py-2 rounded-xl flex items-center justify-center gap-2 bg-[#F5F5F5]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#F81539]"></div>
                  <div className="text-sm sm:text-base font-medium text-[#3E3232]">
                    Send Post
                  </div>
                </div>
              </Link>

              <Link to={"/send-video"}>
                <div className="send-video px-4 py-2 rounded-xl hover:bg-[#F5F5F5]">
                  <div className="text-sm sm:text-base font-medium text-[#3E3232]">
                    Send Video
                  </div>
                </div>
              </Link>
            </div>

            {/* Inputs */}
            <div className="inputs flex flex-col md:flex-row gap-5 mb-6">
              <div className="subject flex-1">
                <label
                  htmlFor="subject"
                  className="text-[16px] font-medium text-[#3E3232]"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-[#F5F5F5] rounded-xl mt-2 w-full h-[48px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                />
              </div>
              <div className="name relative flex-1">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium text-[#3E3232]"
                >
                  Add Tags
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-[#F5F5F5] rounded-xl mt-2 w-full h-[48px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                />
                <div className="absolute right-1 top-9 w-[40px] h-[40px] rounded-xl bg-[#0000000D] flex items-center justify-center">
                  <FaPlus />
                </div>
              </div>
            </div>

            {/* Explanation Content */}
            <div>
              <div className="text-[16px] font-medium text-[#3E3232]">
                Explanation
              </div>
              <div className="content w-full mt-2 rounded-xl bg-white shadow-md">
                {/* Buttons */}
                <div className="btn flex flex-wrap gap-3 p-4">
                  {[
                    { icon: <FaRegImage />, label: "Image" },
                    { icon: <CgColorPicker />, label: "Color" },
                    { icon: <BiCodeAlt />, label: "Text" },
                    { icon: <FaAlignLeft />, label: "Align" },
                    { icon: <FaLink />, label: "Link" },
                  ].map((btn, i) => (
                    <div
                      key={i}
                      className="bg-[#F5F5F5] px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                      {btn.icon}
                      <div className="text-sm text-[#3E3232BF] font-medium">
                        {btn.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <textarea
                    className="w-[95%] sm:w-[90%] h-[220px] mb-4 bg-[#F5F5F5] rounded-xl p-3 focus:outline-none text-[#3E3232BF] text-sm placeholder:text-[#3E3232BF]"
                    placeholder="Type ..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Add Files */}
          <div className="add-file w-full lg:w-1/3">
            <div className="text-[16px] font-medium text-[#3E3232]">
              Add Files
            </div>
            <div className="w-full h-[360px] mt-2 flex items-center justify-center rounded-xl shadow-sm bg-[#F5F5F5]">
              <label className="w-[90%] h-[90%] border border-dashed border-[#E1E1E1] rounded-xl flex items-center justify-center cursor-pointer relative">
                {file ? (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{file.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <FaRegImage className="text-[64px] text-[#3E323240]" />
                    <p className="text-[#3E3232BF] text-[12px]">
                      Drop Image Here, Paste Or
                    </p>
                    <div className="border border-[#E6E6E6] shadow-sm px-4 py-2 rounded-xl flex justify-center items-center">
                      <div className="text-[#3E3232BF] text-sm font-medium flex items-center gap-2">
                        <FaPlus /> Select
                      </div>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5">
              <button className="bg-[#F5F5F5] flex-1 min-w-[80px] h-[40px] rounded-xl flex items-center justify-center gap-2">
                <FaRegSave className="text-sm text-[#3E323280]" />
                <div className="text-[#3E3232BF] text-sm font-medium">
                  Draft
                </div>
              </button>
              <button className="bg-[#F5F5F5] flex-1 min-w-[80px] h-[40px] rounded-xl flex items-center justify-center gap-2">
                <FaRegEye className="text-sm text-[#3E323280]" />
                <div className="text-[#3E3232BF] text-sm font-medium">
                  Preview
                </div>
              </button>
              <button className="bg-[#F81539BF] flex-1 min-w-[80px] h-[40px] rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-white">
                <FiSend /> Public
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
