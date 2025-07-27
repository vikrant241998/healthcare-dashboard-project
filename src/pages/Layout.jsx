import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1024); // ✅ no flicker

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden relative transition-all duration-300">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden  ">
        <div>
          <Header />
        </div>

        {/* Content */}
        <div className="outlet-main-container  dark:bg-[#ffffff] bg-[#f0f8ff] !p-2 sm:!p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
