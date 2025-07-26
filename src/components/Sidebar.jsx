import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocalHospital } from "react-icons/md";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaCalendarCheck,
  FaFileAlt,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Patients", path: "/patients", icon: <FaUserInjured /> },
  { name: "Appointments", path: "/appointments", icon: <FaCalendarCheck /> },
  { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* 👉 Overlay for small screens */}

      {isOpen && window.innerWidth <= 1024 && (
        <div
          className="fixed top-16 left-0 right-0 bottom-0 bg-[#00000017 ] bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 👉 Sidebar */}
      <div
        className={`
          bg-[#0f172a] text-white flex flex-col transition-all duration-300 ease-in-out
          h-full z-50
          ${isOpen ? "w-[260px]" : "w-[50px]"}
          fixed top-0 left-0
          lg:relative lg:w-[260px] lg:z-auto
        `}
      >
        <div
          className={`
            transition-opacity duration-300 ease-in-out
            ${isOpen ? "opacity-100 delay-100" : ""}
            overflow-hidden
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-4 border-b border-[#34495e] bg-[#0f172a] cursor-pointer">
            {isOpen && (
              <div className="flex flex-row items-center gap-2 w-full border-b border-[#34495e] !px-5 !py-4 !ml-2">
                <MdLocalHospital className="text-[25px]" />
                <span className="text-[20px] font-semibold tracking-[1px] whitespace-nowrap">
                  Hospital Panel
                </span>
              </div>
            )}

            {/* Close Icon */}
            <div className="lg:hidden  !mt-[-15px] !mr-[5px] !mb-[10px] !ml-0">
              {isOpen ? (
                <RiCloseLargeLine
                  className="cursor-pointer text-xl"
                  onClick={() => setIsOpen(false)}
                />
              ) : null}
            </div>
          </div>

          {/* Hamburger Icon */}
          {!isOpen && (
            <div className="lg:hidden p-2 flex justify-center items-center !mt-5 cursor-pointer ">
              <FaBars
                className="cursor-pointer text-2xl"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}

          {/* Menu Items */}
          {isOpen && (
            <ul className="space-y-2 !mt-5">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex items-center gap-[15px] justify-start !mx-auto w-[210px] rounded-[5px] text-[16px] tracking-[1px] transition-colors duration-300 !mb-2 !px-1.5 !py-2
                      ${
                        isActive
                          ? "bg-[#536f8a] text-white"
                          : "text-[#e0ffff] hover:bg-[#536f8a] hover:text-white"
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-md">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
