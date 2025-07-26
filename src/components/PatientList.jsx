import React, { useEffect, useState } from "react";
import patientData from "../data/patientsAdmission.json"; // 👈 import directly

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(patientData); // 👈 set data from imported JSON
  }, []);

  return (
    <div className="w-full">
      <div className="bg-[#0f172a] text-white rounded-xl !p-4 w-full shadow-md">

        <h2 className="text-lg sm:text-base font-semibold !mb-4">
          Recent Patient Admissions
        </h2>

        <div className="space-y-3 max-h-[350px] overflow-y-auto hide-scrollbar">
          {patients.map((patient, index) => (
            // <div
            //   key={index}
            //   className="bg-[#1e293b] hover:bg-[#334155] transition duration-300 ease-in-out cursor-pointer !p-3 rounded-lg 
            //              flex flex-col sm:!flex-row sm:items-center sm:justify-between !mb-2"
            // >
            //   <div>
            //     <h3 className="font-semibold text-base sm:text-sm">
            //       {patient.name}
            //     </h3>
            //     <p className="text-sm text-gray-300">{patient.date}</p>
            //   </div>
            //   <div className="mt-2 sm:mt-0 text-sm text-gray-300 flex flex-col sm:items-end">
            //     <span>
            //       {patient.ageGender} {patient.waitTime}
            //     </span>
            //     <span>{patient.room}</span>
            //   </div>
            // </div>

            <div
  key={index}
  className="bg-[#1e293b] hover:bg-[#334155] transition duration-300 ease-in-out cursor-pointer !p-3 rounded-lg 
             flex flex-row items-center justify-between !mb-2"
>
  <div>
    <h3 className="font-semibold text-base sm:text-sm">
      {patient.name}
    </h3>
    <p className="text-sm text-gray-300">{patient.date}</p>
  </div>
  <div className="text-sm text-gray-300 flex flex-col items-end">
    <span>
      {patient.ageGender} {patient.waitTime}
    </span>
    <span>{patient.room}</span>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
