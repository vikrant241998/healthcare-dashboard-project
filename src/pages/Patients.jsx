import React from "react";

const Patients = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center dark:bg-[#0f172a] bg-[#ffffff] dark:text-white text-[#1e2a38] !px-4 !py-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-3 text-center">
          Patients Page
        </h1>

        {/* Sub Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold !mb-4 text-center dark:text-white text-[#5b646f]">
          Coming Soon
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl dark:text-white text-[#6d92bb] !mb-6 text-center max-w-[600px]">
          We're working hard to bring you something amazing. Stay tuned for
          updates.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 !mt-4">
          <button className="bg-[#536f8a] hover:bg-[#33495e] text-white font-medium tracking-[1px] !px-6 !py-2 rounded-md transition duration-300">
            Notify Me
          </button>
          <button className="dark:bg-[#000000]  bg-[#ffffff]-600 border border-gray-500 hover:border-[#0f172a] dark:text-gray-300 text-[#000000] !px-6 !py-2 rounded-lg transition duration-300">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Patients;
