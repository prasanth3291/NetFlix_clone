import React, {useState} from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (!value || !isValidEmail(value)) {
            setEmailError('Please enter a valid email or phone number');
          } else {
            setEmailError('');
          }
    }
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };
    
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);

        if (!value) {
            setPasswordError('Password must be 4 to 20 characters')
        } else {
            setPasswordError('')
        }
    }

    return (
    <div>
        <div className='navbar'>
        <Link to="/">
        <div className="logo-container">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        </div>
        </Link>
        </div>
        <div className='banner'>
        <div className='signin_container'>
            <div className='signin_header'><h1>Sign In</h1></div>
            <div>
            <form>
            <input type='email' className='signin_input' value={email} placeholder='Email or phone number' onChange={handleEmailChange} />
            <div className="error-message">{emailError}</div>
            <input type='password' className='signin_input' value={password} placeholder='Password' onChange={handlePasswordChange} />
            <div className="error-message">{passwordError}</div>
            <button className='submit_btn'>Sign In</button>
            <div className="checkbox-container">
            <label className="checkbox-label" ><input type="checkbox" name="rememberMe"  />Remember Me </label>
            <a href="/" className="checkbox-link"> Need help?</a>
            </div>
            </form>
            </div>
            <div className='signin_footer'>
                <span>New to Netflix? <a href='/'>Sign up now</a></span>
            </div>
            <div className='signin_footer1'>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='/'>Learn more. </a></p>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
    </div>
)
}

export default SignIn
