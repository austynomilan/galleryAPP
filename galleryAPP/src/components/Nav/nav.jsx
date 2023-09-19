import React,{useState} from 'react';
import './nav.scss';
import Logo from '../../assets/gallry.png';
import Login from '../Login/login';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function nav() {
  const [login, setLogin] = useState(false)


  return (
    <>
    <div className='navContainer'>
      <img src={Logo} alt='logo' />
      <section className='search'>
        <input type='text' placeholder='search gallery...' autoFocus />
        <FaSearch />
      </section>
      <section className='user'>
        <FaUser onClick={()=>setLogin(!login)} size={30} color='rgb(56, 30, 5)' />
      </section>
    </div>
    {login && <Login />}
    </>
    
  );
}
