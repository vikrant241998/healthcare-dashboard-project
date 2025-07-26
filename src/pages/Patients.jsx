import React from 'react'

const Patients = () => {
  return (
<>
<div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white !px-4">
      <h1 className="text-5xl md:text-6xl font-bold !mb-4">Patients Page</h1>
      <h1 className="text-5xl md:text-5xl font-bold !mb-4">Coming Soon</h1>
      <p className="text-lg md:text-xl text-gray-300 !mb-6 text-center max-w-xl">
        We’re working hard to bring you something amazing. Stay tuned for updates.
      </p>
      <div className="flex gap-4 !mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white !px-6 !py-2 rounded-lg transition">
          Notify Me
        </button>
        <button className="border border-gray-500 hover:border-white !px-6 !py-2 rounded-lg transition">
          Back to Home
        </button>
      </div>
    </div>
</>  )
}

export default Patients