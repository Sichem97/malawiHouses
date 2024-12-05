import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
    <footer id="footer" class="footer ">
			{/* Footer Top  */}
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="single-footer">
							<h2>Follow Us</h2>
							
							{/* Social  */}
							<ul class="social">
								<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
				
								<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>

								<li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>

								<li><a href="#"><i class="fa-brands fa-google-play"></i></a></li>

								<li><a href="#"><i class="fa-brands fa-app-store"></i></a></li>
							</ul>
							{/* End Social  */}
						</div>
							
						<div class="single-footer">
							<h2>In PartnerShip With</h2>
							<ul class="social">
							<li><img src="./assets/Special/QmarkA.png" alt="24/7 picture" /></li>
							<li><img src="./assets/Special/QmarkA.png" alt="24/7 picture" /></li>
							<li><img src="./assets/Special/QmarkA.png" alt="24/7 picture" /></li>
							</ul>
						</div>
						
						<div class="single-footer">
							<h2>Open Hours</h2>
							<ul class="time-sidual">
								<li class="day"><span>24/7</span><img src="./assets/4.png" alt="24/7 picture" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			 {/* End Footer Top  */}
			{/* Copyright  */}
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="copyright-content">
							<p>© {new Date().getFullYear()} Malawi Houses. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
			 {/* End Copyright  */}
		</footer>
    </div>
  )
}

export default Footer
