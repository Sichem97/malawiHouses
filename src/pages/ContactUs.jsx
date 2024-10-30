import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/ContactUs.css'
import { Link } from 'react-router-dom'


export default function ContactUs() {
  return (
    <div>
		<>
		<Header/>
		</>
		<>
		{/* Breadcrumbs  */}
		<div class="breadcrumbs_form">
			<div class="breadcrumbs_row_form">
				<div class="section-title">
					<h2>Needs for Help? <br /> Get An Appointment</h2>
					<img src="assets/carry2.png" alt="logo2_picture"/>							
					<ul class="bread-list">
							<li><Link to={'/'}>Home</Link></li>
                            <li><i class="fa fa-angle-double-right"></i></li>
                            <li class="active">Contact-Us</li>
                        </ul>
				</div>
			</div>
		</div>
		{/* End Breadcrumbs  */}

       {/* Start Appointment  */}
		<section class="appointment">
			<div class="container">
				<div class="Contact_row">
					<div>
						<form class="form" action="#">
						<div class="form_row">

							<div class="form-group">
								<input name="name" type="text" placeholder="Name" required/>
							</div>

							<div class="form-group"><div> <span class="current">Department :</span>
								<select name="" id="departement">
									<optgroup>
										<option value="Insurance_Services">Insurance Services</option>
										<option value="Property_maintenance">Property maintenance</option>
										<option value="Property_Negociation">Property Negociation</option>
										<option value="Property_manager">Property manager</option>
										<option value="Relocation_services">Relocation services</option>
									</optgroup>
								</select></div>
							</div>

							<div class="form-group">
								<input name="email" type="email" placeholder="Email" required/>
							
							</div>
								
							<div class="form-group"> 
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

							<div class="form-group">
								<input name="phone" type="text" placeholder="Phone" required/>
							</div>

							<div class="form-group">
								<div><span class="current">Area :</span>
									<select name="" id="Area">
										<option value="Area 23">Area 23</option>
									</select>
								</div>
							</div>
						</div>

							<div class="form-group">
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
