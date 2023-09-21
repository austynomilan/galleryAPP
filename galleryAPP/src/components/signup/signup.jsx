import { useState } from 'react';
import './signup.scss';
import SignIn from '../Notification/signIn';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { auth } from '../Firebase/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default function signup({ toggleAuthenticate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const signUp = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
        setEmailError('Please enter a valid email address.');
        return; // Don't proceed with sign-up if email is invalid
      } else {
        setEmailError('');
      }
    
      // Validate password
      if (password.length < 6) {
        setPasswordError('Password should be at least 6 characters long.');
        return; // Don't proceed with sign-up if password is too short
      } else {
        setPasswordError('');
      }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
        setSuccessMessage('Sign-up was successful! Redirecting...');
        setTimeout(() => {
            window.location.href = '/userSignIn';
          }, 1000); 
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message; 
    })
    
      setEmail('');
      setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='login_container'>
      {successMessage && <SignIn successMessage={successMessage} /> }
      <div className='authCard'>
      <div className='login_card'>
          <div className='user'>
            <h2>SIGN UP</h2>
          </div>
          <form onSubmit={signUp}>
            <section>
              <span>Email</span>
              <br />
              <div className="input">
                 <input
                type='text'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
             
              <p>{emailError}</p>
            </section>
            <section>
              <span>Password</span>
              <br />
              <div className='input'>
                <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <span className='eye'>
                  <FaEye onClick={togglePasswordVisibility}/>
                </span>
              ) : (
                <span className='eye'>
                  <FaEyeSlash onClick={togglePasswordVisibility}/>
                </span>
              )}
              </div>
              
              <p>{passwordError}</p>
            </section>
            <h5>use login if returning...</h5>
            <button type='submit'>sign up</button>
          </form>
        </div>
        <div className='support_card'>
          <h3>Hello, Friend</h3>
          <p>If you a returning user..</p>
          <button onClick={toggleAuthenticate}>LOGIN</button>
        </div>
      </div>
      </div>
    </>
  );
}

