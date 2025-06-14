import "./App.css";
import Calendar from "./components/Calendar";
import { scheduleData, scheduleMonth } from "./data/schedule";

function App() {
  return (
    <div className="App">
      <h1>Monthly Schedule Maker</h1>
      <Calendar schedule={scheduleData} scheduleMonth={scheduleMonth} />
    </div>
  );
}

export default App;
