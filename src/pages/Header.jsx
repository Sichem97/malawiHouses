import React from 'react';
import './css/Header.css'

function Header() {
  return (
    <>
    <header className="header">
      	 {/* Header Inner  */}
			<div class="header-inner">
				<div class="container">
					<div class="inner">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-12">
								 {/* Start Logo  */}
								<div class="logo">
									<a href="index.html"><img src="assets/logo.png" alt="#"/></a>
								</div>
								 {/* End Logo  */}
							</div>
							<div class="col-lg-7 col-md-9 col-12">
								 {/* Main Menu  */}
								<div class="main-menu">
									<nav class="navigation">
										<ul class="nav menu">

											<li><a href="#">Home </a></li>

											<li class="active"><a href="#">Services <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="index.html">Renting</a></li>
                          <li><a href="index.html">Buying</a></li>
                          <li><a href="index.html">Selling</a></li>
												</ul>
											</li>

                      <li><a href="#">Blog</a></li>
											
                      <li><a href="#">About</a></li>
											
						
											<li><a href="#">Contact Us</a></li>
										</ul>
									</nav>
								</div>
								{/* / End Main Menu  */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* / End Header Inner  */}
    </header>
    </>
  );
}

export default Header;
