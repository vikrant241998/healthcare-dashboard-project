import React, { useState } from "react";
import appointmentData from "../data/appointments.json";

const AppointmentTable = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = appointmentData.filter((item) => {
    const matchesSearch = item.patientName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="!w-full !rounded-xl dark:bg-[#0f172a] bg-[#ffffff]  border-2 border-[#d6e9f9] dark:border-none !p-4 !shadow-md !mt-5 !mb-5">
      <div className="!flex !flex-col lg:!flex-row !items-center !justify-between !gap-4 !mb-4">
        <h2 className="dark:text-white text-[#4a6080] !text-2xl !font-semibold ">
          Appointments List
        </h2>

        <div className="!flex !gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="!rounded-lg !px-4 !py-2 !text-sm placeholder:text-[#4a6080]  dark:placeholder:text-gray-400 dark:bg-[#1e293b] bg-[#d6e9f9] dark:text-white border-2 border-[#d6e9f9] dark:border-none  !w-full lg:!w-[200px] focus:!outline-none focus:!ring-1 dark:focus:!ring-[#d6e9f9] focus:!ring-[#4a6080]"
          />

          {/* Filter Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="!rounded-lg !px-4 !py-2 !text-sm dark:bg-[#1e293b] bg-[#d6e9f9] dark:text-white !border !border-gray-600 !w-full lg:!w-[160px] focus:!outline-none focus:!ring-1 dark:focus:!ring-[#d6e9f9] focus:!ring-[#4a6080]"
          >
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="!overflow-x-auto">
        <div className="max-h-[440px] overflow-y-auto hide-scrollbar">
          <table className="!w-full !min-w-[900px] !table-auto !text-sm dark:text-[#e0ffff] text-[#4a6080]">
            <thead className="!border-b dark:border-gray-700 border-[4a6080] !text-left dark:text-[#536f8a] text-[#ffffff] !uppercase !tracking-wider sticky top-0 dark:bg-[#0f172a] bg-[#4a6480] z-10">
              <tr>
                <th className="!px-4 !py-3 ">S No.</th>
                <th className="!px-4 !py-3">Patient Name</th>
                <th className="!px-4 !py-3">Appointment Time</th>
                <th className="!px-4 !py-3">Doctor Name</th>
                <th className="!px-4 !py-3">Department</th>
                <th className="!px-4 !py-3 ">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="cursor-pointer dark:hover:bg-[#536f8a]  hover:bg-[#4a6080]   hover:text-[#ffffff] transition duration-300 ease-in-out border-b border-gray-700 hover:scale-[1.01] hover:shadow-sm hover:ring-1 hover:ring-slate-500"
                >
                  <td className="!px-4 !py-3  !text-sm">{item.sno}</td>
                  <td className="!px-4 !py-3  !text-sm">{item.patientName}</td>
                  <td className="!px-4 !py-3  !text-sm">
                    {item.appointmentTime}
                  </td>
                  <td className="!px-4 !py-3  !text-sm">{item.doctorName}</td>
                  <td className="!px-4 !py-3  !text-sm">{item.department}</td>
                  <td
                    className={`!px-4 !py-3 font-semibold ${
                      item.status === "Confirmed"
                        ? "!text-green-400"
                        : item.status === "Pending"
                        ? "!text-yellow-400"
                        : "!text-red-400"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6" className="!text-center !py-5 !text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
