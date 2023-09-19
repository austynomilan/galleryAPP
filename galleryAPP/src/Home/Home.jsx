import React from 'react'
import Navbar from '../components/Nav/nav'
import data from '../Data/data.json'
import './Home.scss'

export default function Home() {
  return (
    <>
    <div className='homeContainer'>
        <Navbar />
        <div className='image_card'>
           {
            data.GirlImages.map(image =>(
                <div className='image_holder'>
                    <img src={image['image-url']} alt="" key={image.id} />
                </div>
            ))
        } 
        </div>
        
    </div>
      
    </>
  )
}
