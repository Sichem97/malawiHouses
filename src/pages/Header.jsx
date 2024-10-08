import React from 'react';
import './css/Header.css'

function Header() {
  return (
    <>
      {/* nav */}
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
              <a href="#"><img src={"./assets/logo.png"} alt="logo_page" /></a>
          </div>

          <div className="nav-links">
            <div className="nav-links_ul">

            <div className='nav-links_ul_grid'>
              <ul>
                <li><a href="#">Home</a></li>
              </ul>
            </div>
              
            <div className='nav-links_ul_grid'>
              <ul>
                <li> <a href="#">Services</a>
                  <ul className="services_ul">
                    <li><a href="#">Renting</a></li>
                    <li><a href="#">Buying</a></li>
                    <li><a href="#">Selling</a></li>
                </ul></li>
              </ul>
            </div>
              
            <div className='nav-links_ul_grid'>
              <ul>
                <li><a href="#">About-Us</a></li>
              </ul>
            </div>

            <div className=''>
              <ul className="contact_link">
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
              
            </div>
          </div>
        </div>
      </nav>
      {/* end of nav */}
    </>
  );
}

export default Header;
