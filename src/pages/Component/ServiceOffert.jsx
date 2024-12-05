import React from 'react'
import '../css/Offert.css'
// import "../css/Single.css"

import { Link } from 'react-router-dom'

export default function ServiceOffert() {
  return (
    
    <div>
        <>
          <section class="Feautes section">
        <div class="container">
          <div class="row">
              <div class="section-title">
                <h2>We Are Always Ready to Assist You</h2>
                <img src="assets/carry2.png" alt="logo_picture"/>
                <p id='ps'>We pride ourselves on being your trusted partner, always ready to provide the support and assistance you need. Whether you have a question, require guidance, or need a quick solution, our dedicated team is here to help. With a commitment to responsiveness, professionalism, and genuine care, we ensure that your concerns are addressed promptly and effectively. Count on us to be by your side, delivering reliable service whenever you need it most. Your satisfaction and peace of mind are our top priorities.
</p>
            </div>
          </div>
          <div class="row">
                {/* Start Single features  */}
                <div class="single-features">
                  <Link to='/RentPage'>
                  <div class="signle-icon">
                    <img src="assets/rent1.png" alt="rental_picture" />
                  </div>
                  <h3>Rent</h3>
                  </Link>
                  <p id='ps'>Explore our amazing rental options for all your needs.</p>
                </div>
                {/* End Single features  */}
                {/* Start Single features  */}
                <div class="single-features">
                  <Link to='/BuyPages'>
                  <div class="signle-icon">
                  <img src="assets/buy1.png" alt="buying_picture" />
                  </div>
                  <h3>Buy</h3>
                  </Link>
                  <p id="ps">Find your dream property with our exclusive offers.</p>
                </div>
                {/* End Single features  */}
                {/* Start Single features  */}
                <div class="single-features last">
                  <Link to='/SellPage'> 
                  <div class="signle-icon">
                  <img src="assets/sold1.png" alt="solling_picture" />
                  </div>
                  <h3>Sell</h3>
                  </Link>
                  <p id="ps">Sell your property easily and quickly with our service.</p>
                </div>
                {/* End Single features  */}
          </div>
        </div>
          </section>
        </>
          {/* --------------------------------------------------- */}
            <>
            
            </>
          {/* --------------------------------------------------- */}
          <>
          {/* professional section  */}

          <section class="professional_section layout_padding">
            <div class="container">
              <div class="row2">
                  <div class="img-box">
                    <img src="assets/Home_pub/Service5.png" alt=""/>
                  </div>
                  <div class="detail-box">
                    <h2>
                      We Provide <span>Professional</span> <br/>
                      House Services.
                    </h2>
                    <p id='ps'>
                    We specialize in providing top-tier professional house services designed to meet and exceed your expectations. From comprehensive property maintenance and meticulous cleaning to expert repairs and organizational solutions, our team is committed to delivering unparalleled quality and attention to detail. With a focus on reliability, efficiency, and customer satisfaction, we ensure your home is impeccably maintained and functions seamlessly. Trust us to uphold the highest standards of professionalism, making your home a space of comfort and excellence.
                    </p>
                    <ul className="services" id='#servicesRen'>
                      <li><a href="#servicesRen">Insurance</a></li>
                      <li><a href="#servicesRen">Maintenance</a></li>
                      <li><a href="#servicesRen">Negociation</a></li>
                      <li><a href="#servicesRen">Management</a></li>
                      <li><a href="#servicesRen">Relocation</a></li>
                      <li><a href="#servicesRen">Renovation</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>

          {/* end professional section  */}
          </>
        
        <>
        {/* Start service  */}
		<section class="services section">
			<div class="container1">
				<div class="row3">
						<div class="section-title">
							<h2>We Offer Different Services To <br /> Improve Your Happiness</h2>
							<img src="assets/carry2.png" alt="logo2_picture"/>
							<p id='ps'>At our core, we are dedicated to enhancing your happiness through a diverse range of services tailored to meet your needs. Whether it's creating a comfortable and inviting living space, offering expert support, or delivering solutions that simplify your daily life, our goal is to bring convenience and joy to every interaction. With a focus on quality, reliability, and personalized care, we aim to improve your overall well-being and ensure your satisfaction at every step. Experience the difference of services designed to elevate your happiness.</p>
						</div>
				</div>

				
			</div>
		</section>
		{/* / End service  */}
        </>
    </div>
  )
}
