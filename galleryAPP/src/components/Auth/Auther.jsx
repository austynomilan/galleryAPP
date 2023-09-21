import React, { useState } from 'react'
import Login from '../Login/login'
import Signup from '../signup/signup'

export default function Auther() {
    const [authenticate, setAuthenticate] = useState(false);
    
    const toggleAuthenticate = ()=>{
        setAuthenticate(!authenticate)
    }

  return (
    <div>
        {authenticate ? (<Signup toggleAuthenticate={toggleAuthenticate}/>):
        (<Login toggleAuthenticate={toggleAuthenticate}/>)
        }
      
    </div>
  )
}
