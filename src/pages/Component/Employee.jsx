import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
import '../css/ProdManagement.css';

export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalInfo, setModalInfo] = useState({ isOpen: false, item: null, action: '', duration: '' });
  const [banishMessage, setBanishMessage] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const openModal = (item, action) => {
    setModalInfo({ isOpen: true, item, action, duration: '' });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, item: null, action: '', duration: '' });
  };

  const handleDelete = () => {
    const { item } = modalInfo;
    const updatedEmployees = employees.filter(emp => emp.id !== item.id);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    closeModal();
  };

  const handleBanish = () => {
    const { item, duration } = modalInfo;
    const banishedEmployees = JSON.parse(localStorage.getItem('banishedEmployees')) || [];
    const banishedEmployee = { ...item, banishedUntil: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString() };
    localStorage.setItem('banishedEmployees', JSON.stringify([...banishedEmployees, banishedEmployee]));
    setBanishMessage(`${banishedEmployee.firstName} ${banishedEmployee.lastName} banished for ${duration} days`);
    closeModal();
  };

  const handleDurationChange = (e) => {
    setModalInfo({ ...modalInfo, duration: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const closeBanishMessage = () => {
    setBanishMessage('');
  };

  return (
    <>
      <div className='Main_Prod'>
        <DashHeader />
        <div className='Link_Container'>
          <Link to="/DashAuthentification">Request</Link>
          <Link to="#">Employee</Link>
        </div>
      </div>
      <input type="text" placeholder="Search by ID number" value={searchTerm} onChange={handleSearchChange} />

      <section className="Cation_Container">
        <h2>Employee List</h2>
        {employees.filter(emp => emp.idNumber.includes(searchTerm)).map(employee => (
          <div key={employee.id} className="employee_card">
            <div>
              <ul>
                <li>{employee.firstName} {employee.lastName}</li>
                <li>{employee.id}</li>
                <i><li>{employee.position}</li></i>
                <span><li>{employee.email}</li></span>
                {employee.banishedUntil && (
                  <p>This user is banished until {new Date(employee.banishedUntil).toLocaleDateString()}</p>
                )}
              </ul>
            </div>
            <div>
              <button onClick={() => openModal(employee, 'banish')}>Banish</button>
              <button onClick={() => openModal(employee, 'delete')}>Delete</button>
            </div>
          </div>
        ))}
      </section>

      {modalInfo.isOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h3><i className="fa-solid fa-triangle-exclamation"></i> {modalInfo.action === 'delete' ? 'Delete' : 'Banish'}</h3>
            {modalInfo.action === 'delete' ? (
              <p>Are you sure you want to delete this employee?</p>
            ) : (
              <>
                <p>Banish {modalInfo.item.firstName} {modalInfo.item.lastName} for:</p>
                <select onChange={handleDurationChange} value={modalInfo.duration}>
                  <option value="">Select ban duration</option>
                  <option value="7">1 week</option>
                  <option value="30">1 month</option>
                  <option value="90">3 months</option>
                </select>
              </>
            )}
            <button onClick={modalInfo.action === 'delete' ? handleDelete : handleBanish} className="btn-confirm">confirm</button>
            <button onClick={closeModal} className="btn-cancel">cancel</button>
          </div>
        </div>
      )}

      {banishMessage && (
        <div className="modal_overlay">
          <div className="modal_content">
            <p>{banishMessage}</p>
            <button onClick={closeBanishMessage} className="btn-confirm">ok</button>
          </div>
        </div>
      )}
    </>
  );
}
