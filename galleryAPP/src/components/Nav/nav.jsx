import React, { useState } from 'react';
import './nav.scss';
import Logo from '../../assets/gallry.png';
import Login from '../Login/login';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function nav({ onSearchChange, search }) {
  const [login, setLogin] = useState(false);

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
        <section className='user'>
          <FaUser
            onClick={() => setLogin(!login)}
            size={30}
            color='rgb(56, 30, 5)'
          />
        </section>
      </div>
      {login && <Login />}
    </>
  );
}
