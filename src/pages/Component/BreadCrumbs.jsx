import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumbs() {
  return (
    <div>
       {/* Breadcrumbs  */}
		<div class="breadcrumbs">
            <div class="breadcrumbs_row">
              <div class="section-title">
                <h2>Blog</h2>
                <img src="assets/carry2.png" alt="logo2_picture"/>	 
                  <ul class="bread-list">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><i class="fa fa-angle-double-right"></i></li>
                    <li class="active">Single Blog</li>
                  </ul>
              </div>
            </div>
		</div> 
		 {/* End Breadcrumbs  */}
    </div>
  )
}
 