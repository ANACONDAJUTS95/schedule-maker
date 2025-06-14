import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Calendar.css";

const Calendar = ({ schedule, scheduleMonth }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="header">
          {/* <div className="view-switcher">
            <button className="view-btn">Day</button>
            <button className="view-btn active">Month</button>
          </div> */}
          <div className="date-nav">
            <button onClick={prevMonth} className="nav-btn">
              <FaChevronLeft />
            </button>
            <h2>{format(currentDate, "MMMM yyyy")}</h2>
            <button onClick={nextMonth} className="nav-btn">
              <FaChevronRight />
            </button>
          </div>
          {/* <div className="filters">
            <button className="filter-btn">Brand</button>
            <button className="filter-btn">Influencer</button>
          </div> */}
        </div>
        <div className="days-of-week">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>
        <div className="days-grid">
          {days.map((day) => {
            const dayNumber = format(day, "d");
            const currentMonthName = format(currentDate, "MMMM");

            let daySchedule = null;
            if (currentMonthName === scheduleMonth) {
              daySchedule = schedule.find(
                (item) => item.dayOfTheMonth == dayNumber
              );
            }

            const scheduleItems = [];
            if (daySchedule && isSameMonth(day, monthStart)) {
              if (daySchedule.mainNurseAssistant) {
                scheduleItems.push({
                  time: "10:00 AM",
                  title: daySchedule.mainNurseAssistant,
                  subtitle: "Main Shift",
                  color: "blue",
                });
              }
              if (daySchedule.morningNurseAssistant) {
                scheduleItems.push({
                  time: "08:00 AM",
                  title: daySchedule.morningNurseAssistant,
                  subtitle: "Morning Shift",
                  color: "green",
                });
              }
              if (daySchedule.eveningNurseAssistant) {
                scheduleItems.push({
                  time: "06:00 PM",
                  title: daySchedule.eveningNurseAssistant,
                  subtitle: "Evening Shift",
                  color: "red",
                });
              }
            }

            return (
              <div
                key={day.toString()}
                className={`day ${
                  !isSameMonth(day, monthStart) ? "disabled" : ""
                }`}
              >
                <div className="day-number">{dayNumber}</div>
                <div className="schedule-list">
                  {scheduleItems.map((item, index) => (
                    <div key={index} className="schedule-card-wrapper">
                      <div className="schedule-time">{item.time}</div>
                      <div className={`schedule-card card-${item.color}`}>
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
