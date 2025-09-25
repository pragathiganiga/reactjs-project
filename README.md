# React Dev Dashboard

A **full-featured React dashboard app** built with **React, Vite, Zustand, Recharts, and React Router**. It includes dark mode, tasks management, real-time charts, and responsive design.

---

## Features

- Responsive layout for **desktop and mobile**  
- **Dark mode** toggle for the entire app  
- **Dashboard** with real-time stats and charts  
- **Tasks page** with CRUD operations (add, delete, toggle complete)  
- **Profile** and **Settings** pages  
- **About** page with app information  
- **Global state management** using **Zustand**  
- Integration with public APIs for real data  
- Creative UI with **cards, charts, buttons, and icons**  

---

## Technologies Used

- React 18  
- Vite  
- Zustand (state management)  
- React Router DOM  
- Recharts (charts)  
- React Icons  
- Tailwind CSS (optional, for styling)  

---

## Project Structure
```
react-dev-dashboard/
│── public/
│ ├── favicon.ico
│ └── index.html
│
│── src/
│ ├── components/ # Reusable components (Navbar, Card, Button, Chart)
│ │ ├── Navbar.jsx
│ │ ├── Card.jsx
│ │ └── Chart.jsx
│ │
│ ├── pages/ # Page components
│ │ ├── Home.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Tasks.jsx
│ │ ├── Profile.jsx
│ │ ├── Settings.jsx
│ │ └── About.jsx
│ │
│ ├── store/ # Global Zustand store
│ │ └── useStore.js
│ │
│ ├── styles/ # CSS / Tailwind files
│ │ └── global.css
│ │
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
│
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation

1. Clone the repo:
```bash
git clone https://github.com/yourusername/react-dev-dashboard.git
cd react-dev-dashboard

🔗 Live Demo: https://reactapp-includes.netlify.app/
