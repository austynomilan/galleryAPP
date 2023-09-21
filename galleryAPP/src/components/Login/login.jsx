import { useState } from 'react';
import './login.scss';
import { FaUser, FaTimes } from 'react-icons/fa';
import { auth } from '../Firebase/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

export default function login({ toggleAuthenticate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email || !email.includes('@')) {
      setEmailError('Invalid email. Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const signIn = (e) => {
    e.preventDefault();

    if (validateForm()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          window.location.href = '/userSignIn';
        })
        .catch((error) => {
          setEmailError('In valid user. Please try again later.');
        });
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <div className='login_container'>
        <div className='login_card'>
          <div className='user'>
            <h2>LOGIN</h2>
          </div>
          <form onSubmit={signIn}>
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
            <h5>forgot passwor?</h5>
            <button type='submit'>Login</button>
          </form>
        </div>
        <div className='support_card'>
          <h3>Hello, Friend</h3>
          <p>Enter your email and start your journey with us</p>
          <button onClick={toggleAuthenticate}>SIGN UP</button>
        </div>
      </div>
    </>
  );
}
