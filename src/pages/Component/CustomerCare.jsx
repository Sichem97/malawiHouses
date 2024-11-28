import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashHeader from './DashHeader';
import '../css/CustomerCare.css';

export default function CustomerCare() {
  const [applications, setApplications] = useState([]);
  const [offers, setOffers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeSection, setActiveSection] = useState('Applications');
  const [modalInfo, setModalInfo] = useState({ isOpen: false, item: null, type: '', action: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    const storedOffers = JSON.parse(localStorage.getItem('offers')) || [];
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    setApplications(storedApplications);
    setOffers(storedOffers);
    setContacts(storedContacts);
  }, []);
 
  const openModal = (item, type, action) => {
    setModalInfo({ isOpen: true, item, type, action });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, item: null, type: '', action: '' });
  };

  const handleConfirm = () => {
    const { item, type, action } = modalInfo;

    if (action === 'delete') {
      if (type === 'application') {
        setApplications(applications.filter((_, index) => index !== item));
        localStorage.setItem('applications', JSON.stringify(applications.filter((_, index) => index !== item)));
      } else if (type === 'offer') {
        setOffers(offers.filter((_, index) => index !== item));
        localStorage.setItem('offers', JSON.stringify(offers.filter((_, index) => index !== item)));
      } else if (type === 'contact') {
        setContacts(contacts.filter((_, index) => index !== item));
        localStorage.setItem('contacts', JSON.stringify(contacts.filter((_, index) => index !== item)));
      }
    } else if (action === 'processing') {
      const processingItems = JSON.parse(localStorage.getItem('processing')) || [];
      processingItems.push({ ...item, type });
      localStorage.setItem('processing', JSON.stringify(processingItems));
      navigate('/CustomerCare');
    }

    closeModal();
  };

  const renderContacts = () => (
    <>
      <h2>Contacts</h2>
      <div className="card-container">
        {contacts.map((contact, index) => (
          <div key={index} className="application_card">
            <h3 className="text-xl font-bold">{contact.name}</h3>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone Number:</strong> {contact.phone}</p>
            <p><strong>Department:</strong> {contact.department}</p>
            <p><strong>District:</strong> {contact.district}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            
            <button onClick={() => openModal(contact, 'contact', 'processing')} className="btn-confirm">
              <i class="fa-solid fa-check"></i>
            </button>
            <button onClick={() => openModal(index, 'contact', 'delete')} className="btn-cancel">
              <i class="fa-solid fa-trash-can"></i>
            </button>

          </div>
        ))}
      </div>
    </>
  );

  const renderOffers = (filter) => (
    <>
      <h2>Offers</h2>
      <div className="card-container">
        {offers
          .filter((offer) => offer.service === filter)
          .map((offer, index) => (
            <div key={index} className="application_card">
              <h3 className="text-xl font-bold">{offer.name}</h3>
              <p><strong>Email:</strong> {offer.email}</p>
              <p><strong>Phone Number:</strong> {offer.phone}</p>
              <p><strong>Service:</strong> {offer.service}</p>
              <p><strong>Department:</strong> {offer.department}</p>
              <p><strong>District:</strong> {offer.district}</p>
              <p><strong>Message:</strong> {offer.message}</p>

              <button onClick={() => openModal(offer, 'offer', 'processing')} className="btn-confirm">
                <i class="fa-solid fa-check"></i>
              </button>
              <button onClick={() => openModal(index, 'offer', 'delete')} className="btn-cancel">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
      </div>
    </>
  );

  const renderApplications = () => (
    <>
      <h2>Applications</h2>
      <div className="card-container">
        {applications.map((app, index) => (
          <div key={index} className="application_card">
            <h3 className="text-xl font-bold">{app.product.name}</h3>
            <p><strong>Full Name:</strong> {app.fullName}</p>
            <p><strong>Phone Number:</strong> {app.phoneNumber}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>District:</strong> {app.product.district}</p>
            <p><strong>Amount:</strong> MW {app.product.cost}</p>
            <p><strong>Source:</strong> {app.source}</p>
            
                <button onClick={() => openModal(app, 'application', 'processing')} className="btn-confirm">process</button>

                <button onClick={() => openModal(index, 'application', 'delete')} className="btn-cancel"><i class="fa-solid fa-trash-can"></i></button>
              
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="Main_Prod">
        <DashHeader />

        <header className="Care_header">
          <div className="Care_header-inner">
            <div className="inner">
              <div className="row">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <Link onClick={() => setActiveSection('Applications')}>Request</Link>
                      </li>
                      <li className="active">
                        <Link onClick={() => setActiveSection('Contacts')}>Contacted</Link>
                      </li>
                      <li className="active">
                        <Link onClick={() => setActiveSection('Offers')}>Offers</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="applications">
          {activeSection === 'Contacts' && renderContacts()}
          {activeSection === 'Offers' && renderOffers('For Sell')}
          {activeSection === 'Applications' && renderApplications()}
          {activeSection === 'For Rent' && renderApplications()}
          {activeSection === 'For Sell' && renderApplications()}
          {activeSection === 'Offers Rent' && renderOffers('For Rent')}
          {activeSection === 'Offers Sell' && renderOffers('For Sell')}
        </div>
      </div>
 
      {modalInfo.isOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h3><i className="fa-solid fa-triangle-exclamation"></i> {modalInfo.action}</h3>
            <p>Are you sure you want to {modalInfo.action} this item?</p>
            <button onClick={handleConfirm} className="btn-confirm">confirm</button>
            <button onClick={closeModal} className="btn-cancel">cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
