import { useState } from 'react';
import './signup.scss';
import SignIn from '../Notification/signIn';
import { auth } from '../Firebase/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default function signup({ toggleLoginState, toggleAuthenticate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const signUp = (e) => {
    e.preventDefault();
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

  return (
    <>
      <div className='login_container'>
      {successMessage && <SignIn successMessage={successMessage} /> }
        <div className='login_card'>
          <div className='user'>
            <h2>SIGN UP</h2>
          </div>
          <form onSubmit={signUp}>
            <section>
              <span>Email</span>
              <br />
              <input
                type='text'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>{emailError}</p>
            </section>
            <section>
              <span>Password</span>
              <br />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{passwordError}</p>
            </section>
            <button type='submit'>sign up</button>
          </form>
        </div>
        <div className='support_card'>
          <h3>Hello, Friend</h3>
          <p>If you a returning user..</p>
          <button onClick={toggleAuthenticate}>LOGIN</button>
        </div>
      </div>
    </>
  );
}

