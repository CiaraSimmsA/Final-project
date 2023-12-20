// Home.js

import React from 'react';
import './styles.css'

const Home = () => {
  return (
    <div className="container-fluid gradient my-container" >
      <div className="row">
        <div className="col-md-5 my-auto">
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>ToDo List</h1>
            <h4>by Adilet</h4>
            <a href='/login' className="btn btn-primary mt-5">Sign In</a>
          </div>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid rounded-pill" src={process.env.PUBLIC_URL + '/assets/Home/home.png'} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
