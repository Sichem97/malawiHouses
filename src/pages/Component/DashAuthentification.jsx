import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
import '../css/ProdManagement.css';

export default function DashAuthentification() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('registrationRequests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleConfirm = (id) => {
    const position = document.getElementById(`position-${id}`).value;
    if (position === "") {
      alert("Please select a position before confirming.");
      return;
    }

    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status: 'confirmed', position } : req
    );
    localStorage.setItem('registrationRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const confirmedRequest = updatedRequests.find(req => req.id === id);
    localStorage.setItem('employees', JSON.stringify([...employees, confirmedRequest]));
    alert('Registration confirmed!');
  };

  const handleDecline = (id, reason) => {
    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status: 'declined', reason } : req
    );
    localStorage.setItem('registrationRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);

    const declines = JSON.parse(localStorage.getItem('declinedRequests')) || [];
    const declinedRequest = updatedRequests.find(req => req.id === id);
    localStorage.setItem('declinedRequests', JSON.stringify([...declines, declinedRequest]));
    alert('Registration declined!');
  };

  return (
    <>
    <div className='Main_Prod'>
      <DashHeader />
      <div className='Link_Container'>
        <Link to="#">Request</Link>
        <Link to="/Employee">Employee</Link>
      </div>

      </div>
      <section className="Cation_Container">
        <h2>Registration Requests</h2>
        {requests.filter(req => req.status === 'pending').map(request => (
          <div key={request.id} className="request_card">
            <div>
            <img src={request.idPicture} alt="ID" />
            </div>
            
            <div className=''>
            <p>{request.firstName} {request.lastName}</p>
            <p>{request.idNumber}</p>
            <p>{request.gender}</p>
            <p>{request.date}</p>
            <p>{request.nationality}</p>
            <p>{request.phoneNumber}</p>
            <p>{request.email}</p>
            </div>

            <div>
            <select id={`position-${request.id}`}>
              <option value="">Select Position</option>
              <option value="CEO">CEO</option>
              <option value="Admin">Admin</option>
              <option value="Customer Care">Customer Care</option>
              <option value="Negotiation Agent">Negotiation Agent</option>
              <option value="Relocation Agent">Relocation Agent</option>
              <option value="Renovation Agent">Renovation Agent</option>
              <option value="Management Agent">Management Agent</option>
              <option value="Maintenance Agent">Maintenance Agent</option>
            </select>

            <div className="confirm">
            <button onClick={() => handleConfirm(request.id)}>Confirm</button>
            </div>
            
            <input type="text" placeholder="Reason for decline" id={`decline-reason-${request.id}`} />
            <div className="declin">
            <button onClick={() => handleDecline(request.id, document.getElementById(`decline-reason-${request.id}`).value)}>Decline</button>
            </div>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}
