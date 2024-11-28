import React from 'react';
import {Link} from 'react-router-dom'
import '../css/DashHeader.css'

function DashHeader() {
  return ( 
    <>
    <header className="DashHeader">
      	 {/* Header Inner  */}
			<div class="DashHeader-Dashinner">
				<div class="Dashcontainer">
					<div class="Dashinner">
						<div class="Dashrow">

								 {/* Start Logo  */}
								<div class="Dashlogo">
									<h1>Dash<span>Bord</span></h1>
								</div>
								 {/* End Logo  */}

								 {/* Main Menu  */}
								<div class="Dashmain-menu">
									<nav class="Dashnavigation">
										<ul class="Dashnav menu">

											<li><Link to='/DashBord'>Home</Link> </li>

											<li class="active"><Link>Services <i class="fa-solid fa-angles-down"></i></Link>
													<ul class="dropdown">
														<li><Link to='/DashAuthentification'>Authentification</Link></li>
														<li><Link to='/PostProduct'>Post Product</Link></li>
														<li><Link to='/ProdManagement'>Product Management</Link></li>
														<li><Link to='/CustomerCare'>Customer Care</Link></li>
													</ul>
											</li>

											<li>
												<Link to='/Register'>Sign In</Link>
											</li>
																	
											<li>
												<Link to='/'>log Out</Link>
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

export default DashHeader;
