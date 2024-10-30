import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Homepage.css';
import HomeM from './Component/HomeM'

function Homepages() {
 
  return (
    <div className='start'>

        <Header/>

        <>
        <HomeM/>
        </>

        <Footer/>
        
    </div>
  )
}

export default Homepages
