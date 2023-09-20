import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './signIn.scss';

export default function SignIn({ handleCloseSignIn, toggleLoginState }) {

    const logged = ()=>{
        toggleLoginState()
        handleCloseSignIn()
    }
  return (
    <>
      <div className='signin__container'>
        <div className='sign_card'>
          <FaTimes
            size={20}
            className='close'
            cursor={'pointer'}
            onClick={handleCloseSignIn}
          />
          <p>
            Oops... <br />
            Sign in to use drag feature
          </p>
          <FaTimes size={50} color='red' />
          <button onClick={logged}>Sign in</button>
        </div>
      </div>
    </>
  );
}
