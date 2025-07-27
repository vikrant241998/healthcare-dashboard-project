import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Card 1 */}

        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px]  border-2 border-[#d6e9f9] dark:border-none dark:bg-[#0f172a] bg-[#ffffff]  dark:text-white text-[#4a6080] rounded-lg shadow-md !py-8 !px-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03]  hover:bg-[#4a6480]  dark:hover:bg-[#536f8a]  ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:text-[#ffffff] !m-0">
              Total Patients
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:text-[#ffffff]">
              165
            </h2>
          </div>

          <div className="bg-slate-600 group-hover:bg-[#ffffff] !p-3 rounded-xl shadow-inner transition-all duration-300">
            <IoPersonSharp className="!text-2xl text-[#e0f7ff] dark:group-hover:text-[#0f172a] group-hover:text-[#0f172a] transition-all duration-300" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px]  border-2 border-[#d6e9f9] dark:border-none dark:bg-[#0f172a] bg-[#ffffff]  dark:text-white text-[#4a6080] rounded-lg shadow-md !py-8 !px-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03]  hover:bg-[#4a6480]  dark:hover:bg-[#536f8a]  ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:text-[#ffffff] !m-0">
              Appointments
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:text-[#ffffff]">
              65
            </h2>
          </div>

          <div className="bg-slate-600 group-hover:bg-[#ffffff] !p-3 rounded-xl shadow-inner transition-all duration-300">
            <MdDateRange className="!text-2xl text-[#e0f7ff] dark:group-hover:text-[#0f172a] group-hover:text-[#0f172a] transition-all duration-300" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px]  border-2 border-[#d6e9f9] dark:border-none dark:bg-[#0f172a] dark:text-white bg-[#ffffff]  text-[#4a6080] rounded-lg shadow-md !py-8 !px-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03]  hover:bg-[#4a6480]  dark:hover:bg-[#536f8a]  ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:text-[#ffffff] !m-0">
              Bed Occupied
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:text-[#ffffff]">
              205
            </h2>
          </div>

          <div className="bg-slate-600 group-hover:bg-[#ffffff] !p-3 rounded-xl shadow-inner transition-all duration-300">
            <FaBed className="!text-2xl text-[#e0f7ff] dark:group-hover:text-[#0f172a] group-hover:text-[#0f172a] transition-all duration-300" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px]  border-2 border-[#d6e9f9] dark:border-none dark:bg-[#0f172a] dark:text-white bg-[#ffffff]  text-[#4a6080] rounded-lg shadow-md !py-8 !px-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03]  hover:bg-[#4a6480]  dark:hover:bg-[#536f8a]  ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:text-[#ffffff] !m-0">
              Doctors on Duty
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:text-[#ffffff]">
              65
            </h2>
          </div>

          <div className="bg-slate-600 group-hover:bg-[#ffffff] !p-3 rounded-xl shadow-inner transition-all duration-300">
            <FaUserDoctor className="!text-2xl text-[#e0f7ff] dark:group-hover:text-[#0f172a] group-hover:text-[#0f172a] transition-all duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
