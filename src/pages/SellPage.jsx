import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Publish.css';
import { Link, useNavigate } from 'react-router-dom';

export default function SellPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    department: '',
    district: '',
    message: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const offerData = {
      ...formData,
      type: 'Offer'
    };

    // Save to localStorage
    const offers = JSON.parse(localStorage.getItem('offers')) || [];
    localStorage.setItem('offers', JSON.stringify([...offers, offerData]));

    // Clear form fields and message
    setFormData({ name: '', email: '', phone: '', service: '', department: '', district: '', message: '' });
    setMessage('Your offer has been submitted successfully!');

    // Redirect to "/" after 1500ms
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div>
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs_publish">
        <div className="breadcrumbs_row_publish">
          <div className="section-title">
            {/* <h2>In Need To Publish Your <br /> Product?</h2> */}
            <h3>Get An Appointment to <br /> Publish Your Product</h3>
            <img src="assets/carry2.png" alt="logo2_picture"/>
            <ul className="bread-list">
              <li><Link to={'/'}>Home</Link></li>
              <li><i className="fa fa-angle-double-right"></i></li>
              <li className="active">Publish</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* Start Appointment */}
      <section className="publish_appointment">
        <div className="container_publish">
          <div className="Contact_row_publish">
            <div>
              <form className="publish" onSubmit={handleSubmit}>
                <div className="publish_row">
                  <div className="publish-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="publish-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="publish-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="publish-group">
                    <div>
                      <span className="current">Service </span>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        id="service"
                      >
                        <option value="">Select Service</option>
                        <option value="For Sell">For Sell</option>
                        <option value="For Rent">For Rent</option>
                      </select>
                    </div>
                  </div>
                  <div className="publish-group">
                    <div>
                      <span className="current">Department </span>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        id="department"
                      >
                        <option value="">Select Department</option>
                        <option value="Insurance_Services">Insurance Services</option>
                        <option value="Property_maintenance">Property maintenance</option>
                        <option value="Property_management">Property management</option>
                        <option value="Property_Negociation">Property Negociation</option>
                        <option value="Property_Rev">Property Renovation</option>
                        <option value="Relocation_services">Relocation services</option>
                      </select>
                    </div>
                  </div>
                  <div className="publish-group">
                    <div>
                      <span className="current">District </span>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        id="district"
                      >
                        <option value="">Select District</option>
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
                        <option value="Nkhata Bay">Nkhata Bay and Likoma</option>
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
                  </div>
                </div>
                <div className="publish-group">
                  <textarea
                    name="message"
                    placeholder="Write Your Message Here....."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="button_row">
                  <div>
                    <p>{message && <p className="text-green-500 mt-4">{message}</p>}</p>
                  </div>
                  <div className="button">
                    <button type="submit" className="btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="appointment-image">
              {/* <img src="assets/Home_pub/picture1.png" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment */}
 
      <Footer />
    </div>
  );
}
