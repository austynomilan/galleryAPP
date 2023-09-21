import React, { useState } from 'react';
import './nav.scss';
import Logo from '../../assets/gallry.png';
import Login from '../Login/login';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function nav({
  onSearchChange,
  search,
  toggleLoginState,
  login,
  handleLogout,
  isAuthUserPage
}) {
  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    onSearchChange(inputValue);
  };

  const handleLogoutClick = () => {
    handleLogout(); 
    toggleLoginState(false)
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
        <section className='user'>
          <FaUser size={12} color='#000' className='Fauser' />
          {!isAuthUserPage && !login ? (
            <p onClick={toggleLoginState}>Sign in</p>
          ) : (
            <p onClick={handleLogoutClick}>log out</p>
          )}
        </section>
      </div>
      {login && <Login toggleLoginState={toggleLoginState} />}
    </>
  );
}
