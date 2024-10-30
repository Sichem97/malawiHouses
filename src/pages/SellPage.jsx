import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/Publish.css'
import { Link } from 'react-router-dom'

export default function SellPage() {
  return (
    <div>
       <>
      <Header/>
      </>

      <>
        {/* Breadcrumbs  */}
          <div class="breadcrumbs_publish">
            <div class="breadcrumbs_row_publish">
              <div class="section-title">
                <h2>In Need To Publish Your <br /> Product?</h2>
                <h3>Get An Appointment</h3>
                <img src="assets/carry2.png" alt="logo2_picture"/>
                <ul class="bread-list">
					<li><Link to={'/'}>Home</Link></li>
					<li><i class="fa fa-angle-double-right"></i></li>
					<li class="active">Publish</li>
				</ul>
              </div>
            </div>
          </div>
        {/* End Breadcrumbs  */}
      </>

      <>
      
       {/* Start Appointment  */}
		<section class="publish_appointment">
			<div class="container_publish">
				<div class="Contact_row_publish">
						<div>
						<form class="publish" action="#">
						<div class="publish_row">

							<div class="publish-group">
								<input name="name" type="text" placeholder="Name" required/>
							</div>
						
              <div class="publish-group">
                <div> <span class="current">Category :</span>
								<select name="" id="departement">
									<optgroup>
										<option value="Insurance_Services">Building</option>
										<option value="Property_maintenance">Hotel & Motel</option>
										<option value="Property_Negociation">House</option>
										<option value="Property_manager">Office</option>
										<option value="Relocation_services">Shops</option>
									</optgroup>
								</select></div>
							</div>

							<div class="publish-group">
								<input name="phone" type="text" placeholder="Phone" required/>
							</div>
								
              <div class="publish-group"> 
									<div><span class="current">District :</span>
										<select name="" id="District">
											<optgroup> 
												<option value="Lilongwe">Lilongwe</option>
												<option value="Blantyr">Blantyr</option>
												<option value="Dowa">Dowa</option>
												<option value="Mutshindi">Mutshindi</option>
											</optgroup>
										</select>
									</div>
							</div>
								
							<div class="publish-group">
								<input name="email" type="email" placeholder="Email" required/>
							</div>

							<div class="publish-group">
								<div><span class="current">Area :</span>
									<select name="" id="Area">
										<option value="Area 23">Area 23</option>
									</select>
								</div>
							</div>

							</div>

							<div class="publish-group">
								<textarea name="message" placeholder="Write Your Message Here....."></textarea>
							</div>

							<div class="button_row">
								
								<div class="">
									<p>( We will be confirm by an Text Message )</p>
								</div>

								<div class="button">
									<button type="submit" class="btn">Submit</button>
								</div>
							</div>
						</form>
						</div>

						<div class="appointment-image">
						{/* <img src="assets/Home_pub/picture1.png" alt="" /> */}
						</div>
				</div>
			</div>
		</section>
		 {/* End Appointment  */}
      </>
      
      <>
      <Footer/>
      </>
    </div>
  )
}
