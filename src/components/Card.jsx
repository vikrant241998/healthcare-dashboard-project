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
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px] bg-gradient-to-br from-[#0f172a] to-[#1e272e] text-white rounded-2xl shadow-md !p-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent !m-0">
              {/* Total Patients */}
              Vikrant Mulankar
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent">
              165
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-700 group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] !p-3 sm:!p-3 md:!p-3 lg:!p-3 xl:!p-3 rounded-xl shadow-inner transition-all duration-300">
            <IoPersonSharp className="!text-2xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-xl text-[#e0f7ff] group-hover:text-white transition-all duration-300" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px] bg-gradient-to-br from-[#0f172a] to-[#1e272e] text-white rounded-2xl shadow-md !p-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent !m-0">
              Appointments
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent">
              65
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-700 group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] !p-3 sm:!p-3 md:!p-3 lg:!p-3 xl:!p-3 rounded-xl shadow-inner transition-all duration-300">
            <MdDateRange className="!text-2xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-xl text-[#e0f7ff] group-hover:text-white transition-all duration-300" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px] bg-gradient-to-br from-[#0f172a] to-[#1e272e] text-white rounded-2xl shadow-md !p-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent !m-0">
              Bed Occupied
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent">
              205
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-700 group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] !p-3 sm:!p-3 md:!p-3 lg:!p-3 xl:!p-3 rounded-xl shadow-inner transition-all duration-300">
            <FaBed className="!text-2xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-xl text-[#e0f7ff] group-hover:text-white transition-all duration-300" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="cursor-pointer group w-full sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[420px] bg-gradient-to-br from-[#0f172a] to-[#1e272e] text-white rounded-2xl shadow-md !p-5 flex flex-row lg:flex-col-reverse xl:flex-row items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ">
          <div className="!space-y-2 sm:!space-y-2.5 lg:text-center xl:text-left">
            <h4 className="!text-xl sm:!text-xl md:!text-xl lg:!text-xl xl:!text-lg font-semibold tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent !m-0">
              Doctors on Duty
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] group-hover:bg-clip-text group-hover:text-transparent">
              65
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-700 group-hover:from-[#A9C5E1] group-hover:to-[#ff9966] !p-3 sm:!p-3 md:!p-3 lg:!p-3 xl:!p-3 rounded-xl shadow-inner transition-all duration-300">
            <FaUserDoctor className="!text-2xl sm:!text-2xl md:!text-2xl lg:!text-xl xl:!text-xl text-[#e0f7ff] group-hover:text-white transition-all duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
