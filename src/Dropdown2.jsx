import { useEffect } from "react";
import { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

function Dropdown2() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Month");
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

  const options = ["Page 1", "Page 2", "Page 3"];

  return (
    <>
      <div ref={menuRef} className="relative">
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center"
        >
          <h2 className="md:text-[14px] 2small:text-[12px] text-[#3E3232] font-medium">
            Pages
          </h2>
          {open ? (
            <RiArrowDropUpLine size={24} />
          ) : (
            <RiArrowDropDownLine size={24} />
          )}
        </button>

        {/* Overlay dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 md:w-25 sm:w-20 2small:w-15 bg-white shadow-lg rounded-md z-50">
            <ul className="py-2" onClick={() => setOpen(!open)}>
              {options.map((option, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 font-medium"
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

export default Dropdown2;
