import React, { useState } from 'react';
import DashHeader from './DashHeader';
import '../css/PostProduct.css';

export default function PostProduct() {
  const [formData, setFormData] = useState({
    cover: '',
    morePictures: [],
    name: '',
    cost: '',
    sector: 'none',
    category: 'none',
    district: 'none',
    details: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    ownerMessage: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: Array.from(files).map(file => URL.createObjectURL(file))
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData;
    let localStorageKey;

    if (formData.sector === 'none' || formData.category === 'none' || formData.district === 'none') {
      alert('Please select a valid sector, category, and district');
      return;
    }

    const newProduct = {
      id: Date.now(),  // Generate a unique ID
      name: formData.name,
      image: formData.cover,
      description: formData.details,
      details: formData.ownerMessage,
      district: formData.district,
      cost: formData.cost,
      category: formData.category
    };

    if (formData.sector === 'Renting') {
      localStorageKey = 'rentalData';
    } else {
      localStorageKey = 'soldData';
    }

    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.map(cat => 
      cat.category === formData.category
        ? { ...cat, houses: [...cat.houses, newProduct] }
        : cat
    );

    newData = updatedData.some(cat => cat.category === formData.category)
      ? updatedData
      : [...storedData, { category: formData.category, houses: [newProduct] }];

    localStorage.setItem(localStorageKey, JSON.stringify(newData));
    alert('Product added successfully!');
  };

  return (
    <div>
      <DashHeader />
      <section className='Post_Section'>
        <div className='Post_Div'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Product Details</label>
              <div className='Post_form'>
                <div className="Post_form_comment">
                  <div className="Post_form-group_Pro">
                    <i>Cover</i>
                    <input type="file" name="cover" accept="image/*" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>More Pictures</i>
                    <input type="file" name="morePictures" accept="image/*" onChange={handleChange} multiple required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>Name</i>
                    <input type="text" name="name" placeholder='Product Name' onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>MWK</i>
                    <input type="number" name="cost" placeholder='Amount' onChange={handleChange} required />
                  </div>
                </div>
                <div className="Post_form_comment">
                  <div className="Post_form-group_Pro">
                    <i>Sector</i>
                    <select name="sector" id="Sector" onChange={handleChange} required>
                      <option value="none">none</option>
                      <option value="Renting">Renting</option>
                      <option value="Selling">Selling</option>
                    </select>
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>Category</i>
                    <select name="category" id="Category" onChange={handleChange} required>
                        <option value="none">none</option>
                        <option value="Building">Building</option>
                        <option value="Business">Business</option>
                        <option value="Hotel & Motel">Hotel & Motel</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Shop">Shop</option>
                    </select>
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>District</i>
                    <select name="district" id="District" onChange={handleChange} required>
                      <option value="none">none</option>
                      <option value="Balaka">Balaka</option>
                      <option value="Blantyre">Blantyre</option>
                      <option value="Chikhwawa">Chikhwawa</option>
                      <option value="Chiradzulu">Chiradzulu</option>
                      <option value="Chitipa">Chitipa</option>
                      <option value="Dedza">Dedza</option>
                      <option value="Dowa">Dowa</option>
                      <option value="Karonga">Karonga</option>
                      <option value="Kasungu">Kasungu</option>
                      <option value="Lilongwe">Lilongwe</option>
                      <option value="Machinga">Machinga</option>
                      <option value="Mangochi">Mangochi</option>
                      <option value="Mchinji">Mchinji</option>
                      <option value="Mulanje">Mulanje</option>
                      <option value="Mwanza">Mwanza</option>
                      <option value="Mzimba">Mzimba</option>
                      <option value="Neno">Neno</option>
                      <option value="Nkhata Bay">Nkhata Bay</option>
                      <option value="Nkhotakota">Nkhotakota</option>
                      <option value="Nsanje">Nsanje</option>
                      <option value="Ntcheu">Ntcheu</option>
                      <option value="Ntchisi">Ntchisi</option>
                      <option value="Phalombe">Phalombe</option>
                      <option value="Rumphi">Rumphi</option>
                      <option value="Salima">Salima</option>
                      <option value="Southern">Southern</option>
                      <option value="Thyolo">Thyolo</option>
                      <option value="Zomba">Zomba</option>
                    </select>
                  </div>
                  <div className="Post_form-group">
                    <div className="form-group message">
                      <i className="fa fa-pencil"></i>
                      <textarea name="details" rows="7" placeholder="More Details and Requirements" onChange={handleChange}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>Owner Details</label>
              <div className="Post_form">
                <div className="Post_form_comment">
                  <div className="Post_form-group">
                    <i className="fa fa-user"></i>
                    <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-user"></i>
                    <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-phone"></i>
                    <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-envelope"></i>
                    <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                  </div>
                </div>
                <div className="Post_form_comment">
                  <div className="Post_form-group message">
                    <i className="fa fa-pencil"></i>
                    <textarea name="ownerMessage" rows="7" placeholder="Type Your Message Here" onChange={handleChange}></textarea>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form_group button">
              <button type="submit" className="btn primary"><i className="fa fa-send"></i>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
