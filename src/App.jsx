import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  // const [darkMode, setDarkMode] = useState("dark");

  // useEffect(() => {
  //   console.log(darkMode);

  //   if (darkMode === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);


  return (
    <>
        <div>
        {/* <select
          onChange={(event) => setDarkMode(event.target.value)}
          value={darkMode}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="patients" element={<Patients />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
