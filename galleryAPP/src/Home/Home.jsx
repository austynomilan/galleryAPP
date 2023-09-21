import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav/nav';
import 'react-loading-skeleton/dist/skeleton.css';
import data from '../Data/data.json';
import SignIn from '../components/Notification/signIn';
import CardSkeleton from '../components/ui_Kit/cardSkeleton';
import './Home.scss';

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

  const handleTouchImageDrag = () => {
    // Handle touch-based drag action here
    setShowLogin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='homeContainer'>
        <Navbar
          onSearchChange={handleSearchChange}
          login={login}
          toggleLoginState={toggleLoginState}
          search={search}
        />
        <div className='image_card'>
          {showLogin && (
            <SignIn
              toggleLoginState={toggleLoginState}
              handleCloseSignIn={handleCloseSignIn}
            />
          )}
          {loading ? (
            <CardSkeleton numCards={25} />
          ) : (
            data.GirlImages.filter((image) =>
              image.description.toLowerCase().includes(search.toLowerCase())
            ).map((image) => (
              <div className='image_holder' key={image.id}>
                {
                  <img
                    src={image['image-url']}
                    draggable='true'
                    alt={image.description}
                    onDragStart={handleImageDrag}
                    onTouchStart={handleTouchImageDrag}
                  />
                }
                <span>{image.description}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
