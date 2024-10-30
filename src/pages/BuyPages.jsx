import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sold from './Component/Sold'
import './css/Sold.css'
import { Link } from 'react-router-dom'

export default function BuyPages() {
  return (
    <div>
       <>
      <Header/>
      </>

      <>
      {/* Breadcrumbs  */}
      <div class="breadcrumbs_sold">
        <div class="breadcrumbs_row_sold">
          <div class="section-title">
            <h2>Sold Service</h2>
            <img src="assets/carry2.png" alt="logo2_picture"/>	 
                <ul class="bread-list">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><i class="fa fa-angle-double-right"></i></li>
                  <li class="active">Sold Service</li>
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
