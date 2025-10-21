import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { CgColorPicker } from "react-icons/cg";
import { FaAlignLeft } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiCodeAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

function ContactUs() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <Header />

      <div className="contact lg:mx-8 sm:mx-6 mx-2 my-10">
        {/* Inputs Row */}
        <div className="inputs flex flex-col lg:flex-row gap-5">
          <div className="subject flex-1">
            <label
              htmlFor="subject"
              className="sm:text-[16px] text-sm font-medium text-[#3E3232]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#F5F5F5] rounded-xl mt-2 w-full sm:h-[48px] h-[40px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
            />
          </div>

          <div className="name flex-1">
            <label
              htmlFor="name"
              className="sm:text-[16px] text-sm font-medium text-[#3E3232]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#F5F5F5] rounded-xl mt-2 w-full sm:h-[48px] h-[40px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
            />
          </div>

          <div className="email flex-1">
            <label
              htmlFor="email"
              className="sm:text-[16px] text-sm font-medium text-[#3E3232]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#F5F5F5] rounded-xl mt-2 w-full sm:h-[48px] h-[40px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
            />
          </div>
        </div>

        {/* Explanation + Add File */}
        <div className="explanation flex flex-col lg:flex-row gap-5 mt-6">
          {/* Explanation */}
          <div className="explain flex-1">
            <div className="sm:text-[16px] text-sm font-medium text-[#3E3232]">
              Explanation
            </div>
            <div className="content w-full h-auto mt-2 rounded-xl bg-[#FFFFFF] shadow-md">
              <div className="btn flex flex-wrap gap-3 p-3">
                <div className="bg-[#F5F5F5] px-4 h-[40px] rounded-xl flex items-center gap-2 cursor-pointer">
                  <FaRegImage className="text-sm text-[#3E323280]" />
                  <span className="text-sm text-[#3E3232BF] fontsm:-medium">
                    Image
                  </span>
                </div>
                <div className="bg-[#F5F5F5] px-4 h-[40px] rounded-xl flex items-center gap-2 cursor-pointer">
                  <CgColorPicker className="text-[#3E323280]" />
                  <span className="text-sm text-[#3E3232BF] font-medium">
                    Color
                  </span>
                </div>
                <div className="bg-[#F5F5F5] px-4 h-[40px] rounded-xl flex items-center gap-2 cursor-pointer">
                  <BiCodeAlt className="text-[#3E323280]" />
                  <span className="text-sm text-[#3E3232BF] font-medium">
                    Text
                  </span>
                </div>
              </div>

              <div className="p-3">
                <textarea
                  className="w-full min-h-[180px] rounded-xl bg-[#F5F5F5] p-3 focus:outline-none text-[#3E3232BF] text-sm"
                  placeholder="Type ..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Add File */}
          <div className="add-file flex-1 lg:max-w-[320px]">
            <div className="text-[16px] font-medium text-[#3E3232]">
              Add Files
            </div>
            <div className="w-full h-[360px] mt-2 flex items-center justify-center rounded-xl shadow-sm bg-[#F5F5F5]">
              <label className="w-[90%] h-[340px] border border-dashed border-[#E1E1E1] rounded-xl flex items-center justify-center cursor-pointer">
                {file ? (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{file.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <FaRegFolder className="text-[64px] text-[#3E323240]" />
                    <p className="text-[#3E3232BF] text-[12px]">
                      Drop Image Here, Paste Or
                    </p>
                    <div className="border border-[#E6E6E6] w-[104px] h-[40px] rounded-xl flex justify-center items-center">
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
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-3">
          <button className="bg-[#F81539BF] w-[96px] h-[40px] rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-[#FFFFFF]">
            <FiSend /> Send
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
