// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Dashboard from "./pages/Dashboard";
// import Patients from "./pages/Patients";
// import Appointments from "./pages/Appointments";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings";
// import "./App.css";

// function App() {

//   return (
//     <>

//  <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Navigate to="/dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="patients" element={<Patients />} />
//           <Route path="appointments" element={<Appointments />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>

//     </>
//   );
// }

// export default App;




import React from "react";
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

  return (
    <>

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

    </>
  );
}

export default App;
