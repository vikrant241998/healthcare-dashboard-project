import React from "react";
import Card from "../components/Card";
import AppointmentTable from "../components/AppointmentTable";
import PatientList from "../components/PatientList";
import WeeklyAppointment from "../components/WeeklyAppointment";
import PieChartComponent from "../components/PieChartComponent";

const Dashboard = () => {
  return (
    <>
      <div className="w-full  space-y-6">
        <Card />

        <AppointmentTable />

        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="w-full  lg:w-[60%] flex flex-col gap-5 cursor-pointer">
            <WeeklyAppointment />
            <div className="hidden lg:block">
              <PatientList />
            </div>
          </div>

          <div className="w-full lg:w-[39%] cursor-pointer">
            <PieChartComponent />
            <div className="block lg:hidden !mt-3">
              <PatientList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;