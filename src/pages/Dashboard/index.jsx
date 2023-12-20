import React, { useState } from 'react';
import useAuthentication from '../../hooks/auth/authentication';
import Menu from '../../components/Dashboard/menu';
import WorkingCanvas from '../../components/Dashboard/workingCanvas';
import Upcoming from '../../components/Dashboard/canvas/upcoming';
import Today from '../../components/Dashboard/canvas/today';
import Profile from '../../components/Dashboard/canvas/profile';
import CalendarComponent from '../../components/Dashboard/canvas/calendar';


const Dashboard = () => {
  const { user, loginUser } = useAuthentication();
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  if (user) {
    return (
      
      <div className="container my-container">
        <div className="row justify-content-between">
          <Menu onButtonClick={handleButtonClick} selectedButton={selectedButton} />
          <WorkingCanvas selectedButton={selectedButton}>
            {selectedButton === 'Upcoming' && <Upcoming />}
            {selectedButton === 'Today' && <Today />}
            {selectedButton === 'Profile' && <Profile />}
            {selectedButton === 'Calendar' && <CalendarComponent />}
          </WorkingCanvas>
        </div>
      </div>
    );
  }
};

export default Dashboard;
