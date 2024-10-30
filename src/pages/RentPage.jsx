import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Rental from './Component/Rental'
import './css/Rental.css'
import { Link } from 'react-router-dom'


export default function RentPage() {
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
            <h2>Rental Service</h2>
            <img src="assets/carry2.png" alt="logo2_picture"/>	 
                <ul class="bread-list">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><i class="fa fa-angle-double-right"></i></li>
                  <li class="active">Rental Service</li>
                </ul>
          </div>
        </div>
      </div>
		  {/* End Breadcrumbs  */}
      </>

      <>
      
      </>

      <>
      <Rental/>
      </>
      
      <>
      <Footer/>
      </>
    </div>
  )
}
