import React,  { useState, useEffect }from 'react';
import Navbar from '../components/Nav/nav';
import 'react-loading-skeleton/dist/skeleton.css'
import data from '../Data/data.json';
import CardSkeleton from '../components/ui_Kit/cardSkeleton';
import './Home.scss';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

  return (
    <>
      <div className='homeContainer'>
        <Navbar />
        <div className='image_card'>
           {loading?(
            <CardSkeleton numCards={25}/>
           ):(
            data.GirlImages.map((image) => (
                <div className='image_holder' key={image.id}>
                  {<img src={image['image-url']} alt='' /> }
                </div>
              ))
           )

           }
        </div>
      </div>
    </>
  );
}
