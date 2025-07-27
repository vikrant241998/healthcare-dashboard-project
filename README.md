# 🏥 Healthcare Dashboard – Frontend Development Assignment

This project is a **responsive and interactive healthcare dashboard** built using **React** and **Tailwind CSS**. 
It is designed for doctors or hospital administrators to visualize key healthcare metrics, manage appointments, and track patient admissions. All data used is dummy/static JSON — no backend integration required.

---

## 🚀 Tech Stack

- ⚛️ React JS
- 💨 Tailwind CSS
- 📊 Recharts (Charts and Graphs)
- 📁 Dummy JSON Data
- 🌙 Dark/Light Mode Support
- 🔔 React Icons

---

## 📸 Screenshots

### 🌞 Light Mode

#### 🖥️ Desktop
![Light Mode - Desktop](./src/screenshots/Desktop%20View%20Light%20Mode%20Theme.png)

#### 💻 Tablet
![Light Mode - Tablet](./src/screenshots/Tablet%20View%20Light%20Mode%20Theme.png)

#### 📱 Mobile
![Light Mode - Mobile](./src/screenshots/Mobile%20View%20Light%20Mode%20Theme.png)

---

### 🌙 Dark Mode

#### 🖥️ Desktop
![Dark Mode - Desktop](./src/screenshots/Desktop%20View%20Dark%20Mode%20Theme.png)

#### 💻 Laptop
![Dark Mode - Laptop](./src/screenshots/Tablet%20View%20Dark%20Mode%20Theme.png)

#### 📱 Mobile
![Dark Mode - Mobile](./src/screenshots/Mobile%20View%20Dark%20Mode%20Theme.png)


## 📁 Project Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/vikrant241998/healthcare-dashboard-project.git

## 🔗 Live Demo

👉 **Check it live here**: [https://hospitalpanel.netlify.app/](https://hospitalpanel.netlify.app/)


Install the dependencies
npm install

Start the development server
npm run dev


src/
├── assets/                # Icons, images, logos
├── components/            # Reusable UI components
│   ├── AppointmentTable.jsx
│   ├── Cards.jsx
│   ├── Header.jsx
│   ├── PageNotFound.jsx
│   ├── Patients.jsx
│   └── PieChartComponents.jsx
│   └── Sidebar.jsx
│   └── WeeklyAppointment.jsx
│
├── data/                  # Dummy JSON data
│   ├── appointments.json
│   ├── patientsAdmission.json
│   └── pieChartData.json
│   └── weeklyAppointments.json
│
├── pages/                 # Main dashboard page
│   └── Dashboard.jsx
│   └── Appointments.jsx
│   └── Layout.jsx
│   └── Patients.jsx
│   └── Reports.jsx
│   └── ReportsSettings.jsx
│
├── App.jsx
└── index.js



✅ Features Implemented
📱 Fully responsive layout (Desktop, Laptop, Tablet, Mobile)

🌗 Dark/Light mode toggle

🔍 Search & filter in appointment list

📊 Charts using Recharts

✨ Hover effects

📲 Sidebar toggle on small screens


📌 Notes
All data is static and stored in the /data folder in JSON format.

🙌 Author
Developed by Vikrant Mulankar  as part of a frontend development assignment.