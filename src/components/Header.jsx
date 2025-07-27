import { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <div
        className="flex flex-row-reverse justify-between items-center gap-[20px] !ml-[50px] !px-[15px] !py-[19px] dark:bg-[#0f172a] bg-[#d6e9f9] cursor-pointer
                      md:flex-row md:justify-end md:!ml-0 md:gap-12 md:!px-2.5 md:!py-5"
      >
        <div className="flex items-center gap-3.5 sm:gap-5">
          <div>
            <IoMdNotifications className="text-2xl dark:text-[lightcyan] text-[#1e2a38] dark:hover:text-[#a9c5e1] hover:text-[#4a6480]" />
          </div>

          <div
            onClick={() => setDark(!dark)}
            className="cursor-pointer dark:text-[lightcyan] text-[#1e2a38]  dark:hover:text-[#a9c5e1] hover:text-[#4a6480]"
            title={dark ? "Light Mode" : "Dark Mode"}
          >
            {dark ? (
              <MdOutlineDarkMode className="text-2xl" />
            ) : (
              <MdDarkMode className="text-2xl" />
            )}
          </div>

          <div className="block md:hidden">
            <IoMdLogOut className="text-2xl  dark:text-[lightcyan] text-[#1e2a38] dark:hover:text-[#a9c5e1] hover:text-[#4a6480]" />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div>
            <BsPersonCircle className="text-2xl  dark:text-[lightcyan] text-[#1e2a38] dark:hover:text-[#a9c5e1] hover:text-[#4a6480]" />
          </div>
          <div className="text-base  dark:text-[lightcyan] text-[#1e2a38] dark:hover:text-[#a9c5e1] hover:text-[#4a6480]">
            Dr. John Doe
          </div>

          <div className="hidden md:block">
            <IoMdLogOut className="text-2xl dark:text-[lightcyan] text-[#1e2a38] dark:hover:text-[#a9c5e1] hover:text-[#4a6480]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
