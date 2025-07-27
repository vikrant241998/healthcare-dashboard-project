import React, { useEffect, useState } from "react";
import patientData from "../data/patientsAdmission.json";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(patientData);
  }, []);

  return (
    <div className="w-full">
      <div className="dark:bg-[#0f172a] bg-[#ffffff] dark:text-white text-[#4a6480] rounded-xl !p-4 w-full shadow-md border-2 border-[#d6e9f9] dark:border-none">
        <h2 className="text-xl font-semibold !mb-4">
          Recent Patient Admissions
        </h2>

        <div className="space-y-3 max-h-[370px] overflow-y-auto hide-scrollbar">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="group dark:bg-[#334155] bg-[#ffffff] dark:hover:bg-[#334155] hover:!bg-[#4a6480] transition duration-300 ease-in-out cursor-pointer !p-3 rounded-lg
                          flex flex-row items-center justify-between !mb-2 border-1 border-[#4a6480] dark:border-none"
            >
              <div>
                <h3 className="font-semibold text-sm group-hover:text-[#ffffff] dark:group-hover:text-[#e0ffff]">
                  {patient.name}
                </h3>
                <p className="text-sm dark:text-[#e0ffff] text-[#4a6480] group-hover:text-[#ffffff] dark:group-hover:text-[#e0ffff]">
                  {patient.date}
                </p>
              </div>
              <div className="text-sm dark:text-[#e0ffff] text-[#4a6480] flex flex-col items-end group-hover:text-[#ffffff] dark:group-hover:text-[#e0ffff]">
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
