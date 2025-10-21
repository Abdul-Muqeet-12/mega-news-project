import { useEffect } from "react";
import { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

function Dropdown3() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Behzad");

  const menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const options = ["Farzad", "Behroz", "Behzad", "Bahram"];

  return (
    <>
      <div ref={menuRef} className="relative">
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center lg:gap-2 gap-1"
        >
          <img
            src="/images/header-img.png"
            alt=""
            className="lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[40px] h-[40px] rounded-2xl"
          />
          <h2 className="lg:text-[16px] md:text-sm 2small:text-[12px] font-medium rounded p-[2px]">
            {selected}
          </h2>
          {open ? (
            <RiArrowDropUpLine size={24} />
          ) : (
            <RiArrowDropDownLine size={24} />
          )}
        </button>

        {/* Overlay dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 md:w-40 sm:w-50 small:w-42 2small:w-38 bg-white shadow-lg rounded-md z-50">
            <ul className="py-2" onClick={() => setOpen(!open)}>
              {options.map((option, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="block w-full py-2 font-medium border-b border-gray-300 hover:bg-red-400 hover:text-white"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown3;
