import React from 'react';
import Logout from '../../components/Forms/logout.jsx'
const Menu = ({ onButtonClick, selectedButton }) => {
    return (
        <div className='col-md-3 border border-1 rounded my-3 bg-light'>
            <div className="d-flex gap-2 flex-column justify-content-between p-3 m-2 ">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <h1>Menu</h1>
                        <img src="" alt="" style={{ width: "12px" }} />
                    </div>
                    <div className="d-flex flex-row">
                        <input type="text" className='form-control' placeholder='Search' />
                        <button className='btn btn-white bg-white'>Search</button>
                    </div>
                </div>
                <div className="tasks">
                    <h2>Tasks</h2>
                    <div className="form-group">
                        <img src="/assets/Dashboard/arrows.png" alt="" style={{ width: "12px" }} />
                        <button
                            onClick={() => onButtonClick('upcoming')}
                            className={`btn ${selectedButton === 'upcoming' ? 'active' : ''}`}
                            href="text-decoration-none"
                        >
                            Upcoming
                        </button>
                    </div>
                    <div className="form-group">
                        <img src="/assets/Dashboard/list.png" alt="" style={{ width: "12px" }} />
                        <button
                            onClick={() => onButtonClick('today')}
                            className={`btn ${selectedButton === 'today' ? 'active' : ''}`}
                            href="text-decoration-none"
                        >
                            Today
                        </button>
                    </div>
                    <div className="form-group">
                        <img src="/assets/Dashboard/calendar.png" alt="" style={{ width: "12px" }} />
                        <button
                            onClick={() => onButtonClick('calendar')}
                            className={`btn ${selectedButton === 'calendar' ? 'active' : ''}`}
                            href="text-decoration-none"
                        >
                            Calendar
                        </button>
                    </div>
                </div>
                <div className="settings">
                    <h2>Options</h2>
                    <div className="form-group">
                        <img src="/assets/Dashboard/settings.png" alt="" style={{ width: "12px" }} />
                        <button 
                            onClick={() => onButtonClick('profile')}
                            className={`btn ${selectedButton === 'profile' ? 'active' : ''}`}
                            href="text-decoration-none"
                        >
                            Profile
                        </button>
                    </div>
                    <Logout/>
                </div>
            </div>
        </div>
    );
};

export default Menu;
