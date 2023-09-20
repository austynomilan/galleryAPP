import React, { useState } from 'react';
import './nav.scss';
import Logo from '../../assets/gallry.png';
import Login from '../Login/login';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function nav({ onSearchChange, search, toggleLoginState, login }) {

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    onSearchChange(inputValue);
  };

  return (
    <>
      <div className='navContainer'>
        <img src={Logo} alt='logo' />
        <section className='search'>
          <input
            type='text'
            placeholder='search gallery...'
            autoFocus
            value={search}
            onChange={handleSearchChange}
          />
          <FaSearch style={{ cursor: 'pointer' }} />
        </section>
        <section onClick={toggleLoginState} className='user'>
          <FaUser
            size={12}
            color='#000'
            className='Fauser'
          />
          <p>Sign in</p>
        </section>
      </div>
      {login && <Login toggleLoginState={toggleLoginState} />}
    </>
  );
}
