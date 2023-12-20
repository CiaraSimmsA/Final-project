import React, { useState } from 'react';
import './Calendar.css'; // Import the CSS file for styling

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startOfMonth = () => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  const getDay = (date) => date.getDay();

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

    for (let i = 1; i <= totalDays; i++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const isCurrentMonth = currentDate.getMonth() === selectedDate.getMonth();
      const isToday = currentDate.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={i}
          className={`day ${isCurrentMonth ? 'current-month' : 'other-month'} ${isToday ? 'today' : ''}`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="header">
        <button className="nav-button" onClick={handlePrevMonth}>&lt;</button>
        <h2 className="month-title">{selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button className="nav-button" onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
