import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');

    history('/');
  };

  return (
    <div className="form-group">
      <img src="/assets/Dashboard/logout.png" alt="" style={{ width: "12px" }} />
      <button className='btn' onClick={handleLogout}>
        Sign out
      </button>
    </div>
  );
};

export default Logout;
