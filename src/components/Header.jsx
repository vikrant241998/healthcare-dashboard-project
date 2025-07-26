import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div
        className="flex flex-row-reverse justify-between items-center gap-[20px] !ml-[50px] !px-[15px] !py-[19px] bg-[#0f172a] cursor-pointer
                      md:flex-row md:justify-end md:!ml-0 md:gap-12 md:!px-2.5 md:!py-5"
      >
        <div className="flex items-center gap-3.5 sm:gap-5">
          <div>
            <IoMdNotifications className="text-2xl text-[lightcyan] hover:text-[#a9c5e1]" />
          </div>

          <div
            onClick={() => setDark(!dark)}
            className="cursor-pointer text-[lightcyan] hover:text-[#a9c5e1]"
            title={dark ? "Light Mode" : "Dark Mode"}
          >
            {dark ? (
              <MdOutlineDarkMode className="text-2xl" />
            ) : (
              <MdDarkMode className="text-2xl" />
            )}
          </div>

          <div className="block md:hidden">
            <IoMdLogOut className="text-2xl text-[lightcyan] hover:text-[#a9c5e1]" />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div>
            <BsPersonCircle className="text-2xl text-[lightcyan] hover:text-[#a9c5e1]" />
          </div>
          <div className="text-base text-[lightcyan] hover:text-[#a9c5e1]">
            Dr. John Doe
          </div>

          <div className="hidden md:block">
            <IoMdLogOut className="text-2xl text-[lightcyan] hover:text-[#a9c5e1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
