import { useState } from 'react';
import './login.scss';
import { FaUser } from 'react-icons/fa';
import { auth } from '../Firebase/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';


export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = '/userSignIn';
      })
      .catch((error) => {
        console.log(error);
      });
      setEmail('')
      setPassword('')
  };

  return (
    <>
      <div className='login_container'></div>
      <div className='login_card'>
        <div className='user'>
          <FaUser size={30} />
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
            <p>Invalid Email. Pls input a valid mail</p>
          </section>
          <section>
            <span>Password</span>
            <br />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>This Password is not recognized</p>
          </section>
          <button type='submit'>sign in</button>
        </form>
      </div>
    </>
  );
}
