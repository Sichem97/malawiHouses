import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <div>
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Malawi Houses. All rights reserved.</p>
      <p>
        <a href="#" className="footer-link">Privacy Policy</a> | 
        <a href="#" className="footer-link"> Terms of Service</a>
      </p>
    </footer>
    </div>
  )
}

export default Footer
