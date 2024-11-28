import React from 'react';
import {Link} from 'react-router-dom'
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

								 {/* Start Logo  */}
								<div class="logo">
									<Link to='/'>
									<img src="assets/Logo/logo2.png" alt="logo_page"/>
									</Link>
								</div>
								 {/* End Logo  */}

								 {/* Main Menu  */}
								<div class="main-menu">
									<nav class="navigation">
										<ul class="nav menu">

											<li><Link to='/'>Home</Link> </li>

											<li class="active"><Link>Services <i class="fa-solid fa-angles-down"></i></Link>
													<ul class="dropdown">
														<li><Link to='/RentPage'>For Rent</Link></li>
														<li><Link to='/BuyPages'>For Sell</Link></li>
														<li><Link to='/SellPage'>Publish here</Link></li>
													</ul>
											</li>

											<li>
												<Link to='/Blog'>Blog</Link>
											</li>
																	
											<li>
												<Link to='/AboutUs'>About</Link>
											</li>
						
											<li class="active">
												<Link to='/ContactUs'>Contact Us <i class="fa-solid fa-angles-down"></i>
												</Link>

												<ul class="dropdown">
													<li><Link to='/LogIn'>Log In</Link></li>
													<li><Link to='/DashBord'>Test</Link></li>
													</ul>
											</li>

										</ul>
									</nav>
								</div>
								{/* / End Main Menu  */}

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
