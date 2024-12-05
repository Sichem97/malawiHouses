import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="logo">
                  <Link to='/'>
                    <img src="assets/Logo/logo2.png" alt="logo_page" />
                  </Link>
                </div>
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li><Link to='/'>Home</Link></li>
                      <li className="active">
                        <Link>Services <i className="fa-solid fa-angles-down"></i></Link>
                        <ul className="dropdown">
                          <li><Link to='/RentPage'>For Rent</Link></li>
                          <li><Link to='/BuyPages'>For Sell</Link></li>
                          <li><Link to='/SellPage'>Publish here</Link></li>
                        </ul>
                      </li>
                      <li><Link to='/Blog'>Blog</Link></li>
                      <li><Link to='/AboutUs'>About</Link></li>
                      <li><Link to='/ContactUs'>Contact Us</Link></li>
                      <li><Link to='/LogIn'>Log In</Link></li>
                      {/* <li><Link to='/DashBord'>Test</Link></li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </> 
  );
}

export default Header;
