import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profile-container">
      {user ? (
        <>
          <div className="profile-header">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
          <div className="profile-body">
            <h3>User Details</h3>
            <p>ID: {user.id}</p>
            {/* Add more user details as needed */}
          </div>
        </>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Profile