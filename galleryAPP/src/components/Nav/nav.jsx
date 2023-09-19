import React from 'react';
import './nav.scss';
import Logo from '../../assets/gallry.png';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function nav() {
  return (
    <div className='navContainer'>
      <img src={Logo} alt='logo' />
      <section className='search'>
        <input type='text' placeholder='search gallery...' autoFocus />
        <FaSearch />
      </section>
      <section className='user'>
        <FaUser size={30} color='rgb(56, 30, 5)' />
      </section>
    </div>
  );
}
