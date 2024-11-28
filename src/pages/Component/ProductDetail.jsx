import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SoldData from '../Data/SoldData';
import Footer from '../Footer';
import Header from '../Header';
import '../css/ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [categoryIndex, houseIndex] = id.split('-').map(Number);
  const product = SoldData[categoryIndex].houses[houseIndex];
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const [message, setMessage] = useState('');

  if (!product) { return <div>Product not found</div>; }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!personalInfo.fullName || !personalInfo.phoneNumber || !personalInfo.email) {
      setMessage('All fields are required.');
      return;
    }

    const applicationData = {
      ...personalInfo,
      product,
      type: 'For Sell'
    };

    // Save to localStorage
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    localStorage.setItem('applications', JSON.stringify([...applications, applicationData]));

    // Clear form fields and message
    setPersonalInfo({ fullName: '', phoneNumber: '', email: '' });
    setMessage('Application submitted successfully!');

    // Redirect to "/Sold" after 1500ms
    setTimeout(() => navigate('/Sold'), 1500);
  };
 
  return (
    <>
      <Header />
      
      <div className="breadcrumbs_Details">
        <div className="breadcrumbs_Details_row">
          <div className="section-title">
            <h2>More Details</h2>
            <img src="assets/carry2.png" alt="logo2_picture"/>   
            <ul className="bread-list">
              <li><Link to={'/'}>Home</Link></li>
              <li><i className="fa fa-angle-double-right"></i></li>
              <li><Link to='/BuyPages'>For Sell</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="product">
        <h1>{product.name}</h1>
        
        <form onSubmit={handleSubmit}>
          <section className='personal_info_register'>
            <input
              type="text"
              name="fullName"
              placeholder='Your full name'
              value={personalInfo.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder='Your phone number'
              value={personalInfo.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Your email'
              value={personalInfo.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Apply Now</button>
          </section>
        </form>
        
        {message && <p className="text-green-500">{message}</p>}

        <div className="product_register">
          <p>{product.description}</p>
          <p>District : {product.district}</p>
          <p>Amount : MW {product.cost}</p>
        </div>

        <div className="product_detail">
          <img
            className="product_image"
            src={product.image}
            alt={product.name}
          />
          <div className="product_description">
            <p>{product.details}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
