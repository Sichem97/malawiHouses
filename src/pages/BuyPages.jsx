import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sold from './Component/Sold'
import './css/Rental.css'
import { Link } from 'react-router-dom'

export default function BuyPages() {
  return (
    <div>
      
      <>
        <Header/>
      </>

      <>
      {/* Breadcrumbs  */}
      <div class="breadcrumbs_rental">
        <div class="breadcrumbs_row_rental">
          <div class="section-title">
            <h2>For sell</h2>
            <img src="assets/carry2.png" alt="logo2_picture"/>	 
                <ul class="bread-list">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><i class="fa fa-angle-double-right"></i></li>
                  <li class="active">Selling Services</li>
                </ul>
          </div>
        </div>
      </div>
		  {/* End Breadcrumbs  */}
      </>
 
      <>
        <Sold/>
      </>
      
      <>
        <Footer/>
      </>
      
    </div>
  )
}
