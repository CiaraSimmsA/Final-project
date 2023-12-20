import React from 'react';
import SignUpForm from '../../components/Forms/singup'

const SignUp = () =>{
    return (
        <div className='container-fluid my-container'>
            <div className='row'>
                <div className='col-md-6 my-auto'>
                    <img className="img-fluid h-100 rounded" src={process.env.PUBLIC_URL + '/assets/Login/ToDo.png'} alt="" />
                </div>
                <div className='col-md-6 my-auto'>
                    <SignUpForm/>
                </div>
            </div>
        </div>
    );
}

export default SignUp;