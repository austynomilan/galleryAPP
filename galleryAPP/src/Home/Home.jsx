import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav/nav';
import 'react-loading-skeleton/dist/skeleton.css';
import data from '../Data/data.json';
import Login from '../components/Login/login';
import CardSkeleton from '../components/ui_Kit/cardSkeleton';
import './Home.scss';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleImageDrag = () => {
    setShowLogin(true);
  }; 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='homeContainer'>
        <Navbar onSearchChange={handleSearchChange} search={search}/>
        <div className='image_card'>
        
          {loading ? (
            <CardSkeleton numCards={25} />
          ) : (
            data.GirlImages
            .filter((image) =>
              image.description.toLowerCase().includes(search.toLowerCase())
            )
            .map((image) => (
              <div className='image_holder' key={image.id}>
                {/* {showLogin && <Login />} */}
                {<img src={image['image-url']} draggable="true" alt={image.description} onDragStart={handleImageDrag}/>}
                <span>{image.description}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}