import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SoldSearch from './SoldSearch';
import Footer from '../Footer';
import Header from '../Header';
import '../css/ProductDetail.css';

export default function Sold() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedSoldData = JSON.parse(localStorage.getItem('soldData')) || [];
    setFilteredData(storedSoldData);
  }, []);

  const handleFilterChange = (filters) => {
    const { category, district, amount } = filters;
    let filtered = JSON.parse(localStorage.getItem('soldData')) || [];

    if (category !== 'none') {
      filtered = filtered.filter(item => item.category === category);
    }

    if (district !== 'none') {
      filtered = filtered.map(item => ({
        ...item,
        houses: item.houses.filter(house => house.district === district),
      }));
    }

    if (amount !== 'none') {
      let min = 0;
      let max = Infinity;

      if (amount === '<499000') {
        max = 499000;
      } else if (amount === '>500000') {
        min = 999000;
      } else {
        [min, max] = amount.split('-').map(Number);
      }

      filtered = filtered.map(item => ({
        ...item,
        houses: item.houses.filter(house => {
          const cost = parseInt(house.cost.replace(/[^\d]/g, ''), 10);
          return cost >= min && cost <= max;
        }),
      }));
    }

    filtered = filtered.filter(item => item.houses.length > 0);
    setFilteredData(filtered);
  };

  const handleProductClick = (categoryIndex, houseIndex) => {
    const selected = filteredData[categoryIndex].houses[houseIndex];
    setSelectedProduct(selected);
  };

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
      product: selectedProduct,
      type: 'For Sell',
      source: 'Sold'
    };

    // Save to localStorage
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    localStorage.setItem('applications', JSON.stringify([...applications, applicationData]));

    // Clear form fields and message
    setPersonalInfo({ fullName: '', phoneNumber: '', email: '' });
    setMessage('Application submitted successfully!');

    // Redirect to "/Sold" after 1500ms
    setTimeout(() => navigate('/'), 1500);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />

      <SoldSearch onFilterChange={handleFilterChange} />

      <div className="product-grid_sold">
        {filteredData.length > 0 ? (
          filteredData.map((value, index) => (
            <div key={index}>
              <div className="category-title_sold">
                <h1>{value.category}</h1>
              </div>
              <div className="product-list_sold">
                {value.houses.map((house, houseIndex) => (
                  <div
                    className="product-card_sold"
                    key={houseIndex}
                    onClick={() => handleProductClick(index, houseIndex)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="product-image_sold"
                      src={house.image}
                      alt={house.name}
                      onError={(e) => { e.target.src = '/path/to/default/image.jpg'; }}
                    />
                    <div className="product-title_sold">{house.name}</div>
                    <div className="product-description_sold">
                      <span>{house.description}</span> <br />
                      <b>{house.district} <br />{house.area}</b>
                    </div>
                    <div className="product-cost_sold">MW {house.cost}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="Nofound">
            <p><span>Result Not found</span></p>
            <img src="assets/Special/sad.gif" alt="Sad_Sticker" />
          </div>
        )}
      </div>

      {selectedProduct && (
        <>
          <div className="overlay" />
          <div className="product_detail_section">
            <h2>More Details</h2>
            <h1>{selectedProduct.name}</h1>

            <div className="product_detail_card">
              <div>
              <img
                className="product-image"
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />  
              </div>
              
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
                  <div className="confirm">
                  <button type="submit" id='apply'>Apply Now</button>
                  <button type="button" id='cancel' onClick={handleCancel} className="btn-cancel">Cancel</button>
                </div> 
                </section>

                <div className="detail">
                  <span>{selectedProduct.description}</span>
                  <span>District : {selectedProduct.district}</span>
                  <span>Amount : mwk {selectedProduct.cost}  </span>   
              </div> 
              </form>
            
            </div>
            {message && <p className="text-green-500">{message}</p>}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
