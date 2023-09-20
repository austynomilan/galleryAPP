import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav/nav';
import 'react-loading-skeleton/dist/skeleton.css';
import data from '../Data/data.json';
import CardSkeleton from '../components/ui_Kit/cardSkeleton';
import './Home.scss';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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
                {<img src={image['image-url']} alt='' />}
                <span>{image.description}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}