import React from 'react';
import LoginForm from '../../components/Forms/login'

const Login = () => {
    return (
    
    <div className='container-fluid my-container'>
        <div className='row'>
            <div className='col-md-6 my-auto'>
                <img className="img-fluid h-100 rounded" src={process.env.PUBLIC_URL + '/assets/Login/ToDo.png'} alt="" />
            </div>
            <div className='col-md-6 my-auto'>
                <LoginForm/>
            </div>
        </div>
    </div>
    )
}

export default Login;