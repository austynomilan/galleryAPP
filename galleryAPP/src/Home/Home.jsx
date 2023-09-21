import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Auther from '../components/Auth/Auther';



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false);
 

  const toggleLoginState = () => {
    setLogin(!login);
  };

  const handleCloseSignIn = () => {
    setShowLogin(false);
  };

  const handleImageDrag = () => {
    setShowLogin(true);
  };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='homeContainer'>
      <Auther />
      </div>
    </>
  );
}
