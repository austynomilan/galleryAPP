import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import './signIn.scss';

export default function SignIn({ successMessage }) {
  return (
    <>
      <div className='signin__container'>
        <div className='sign_card'>
          <p>{successMessage}</p>
          <FaCheck size={50} color='green' />
        </div>
      </div>
    </>
  );
}
