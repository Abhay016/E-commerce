import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Create an Account</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button >Sign Up</button>
        <p className="loginSignup-login">Already have an account? <span>Login</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" id='agreeCheckbox' />
          <label htmlFor='agreeCheckbox'>By continuing, I agree to the <a href='/terms'>Terms of Use</a> & <a href='/privacy'>Privacy Policy</a>.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;