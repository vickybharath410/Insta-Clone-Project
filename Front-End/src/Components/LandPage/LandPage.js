import React from 'react';
import "../styles/landing.css"

import { useNavigate } from 'react-router-dom';

 
export default function LandingPage() {
 const navigate = useNavigate()
 

  return <div className='landing'>
    <div className='image-container'>
      <img src='https://i.pinimg.com/564x/34/d6/26/34d626a4c5931da4f30077fc9f05e41e.jpg' alt='Instaimage'/>
      
    </div>
   <button className='btn' onClick={()=>navigate('postview')}>Enter</button>
    
    
  </div>
}
