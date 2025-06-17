import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import { scheduleData, scheduleMonth } from "./data/schedule";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>ERS Matrenity and Pediartic Care Clinic Monthly Schedule</h1>
        <div className="mode-switch">
          <h4>Light/Dark Mode</h4>
          <ToggleSwitch isToggled={theme === "dark"} onToggle={handleThemeToggle} />
        </div>
      </div>
      <Calendar schedule={scheduleData} scheduleMonth={scheduleMonth} />
    </div>
  );
}

export default App;
