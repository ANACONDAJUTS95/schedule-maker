import "./App.css";
import Calendar from "./components/Calendar";
import { scheduleData, scheduleMonth } from "./data/schedule";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>ERS Matrenity and Pediartic Care Clinic Monthly Schedule</h1>
      </div>
      <Calendar schedule={scheduleData} scheduleMonth={scheduleMonth} />
    </div>
  );
}

export default App;
