import React from "react";
import Upcoming from '../../components/Dashboard/canvas/upcoming';
import Today from '../../components/Dashboard/canvas/today';
import Profile from './canvas/profile';
import CalendarComponent from '../../components/Dashboard/canvas/calendar'; // Renamed to avoid naming conflict

const WorkingCanvas = ({ selectedButton }) => {
  return (
    <div className="col-md-8 border border-1 rounded my-3 bg-light">
      {selectedButton === 'upcoming' && <Upcoming />}
      {selectedButton === 'today' && <Today />}
      {selectedButton === 'calendar' && <CalendarComponent />}
      {selectedButton === 'profile' && <Profile />}
    </div>
  );
};

export default WorkingCanvas;
