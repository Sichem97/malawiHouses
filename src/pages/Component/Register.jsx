import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashHeader from './DashHeader';
import '../css/PostProduct.css';

export default function Register() {
  const [formData, setFormData] = useState({
    idPicture: '',
    firstName: '',
    lastName: '',
    gender: 'Male',
    date: '',
    nationality: 'Malawian',
    idNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: URL.createObjectURL(files[0])
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
    const today = new Date();
    const birthDate = new Date(formData.date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setMessage('+18 required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...formData,
      position: '',
      status: 'pending'
    };

    const storedRequests = JSON.parse(localStorage.getItem('registrationRequests')) || [];
    localStorage.setItem('registrationRequests', JSON.stringify([...storedRequests, newRequest]));
    setMessage('Registration successful!');

    // Clear all the inputs except the file input
    setFormData({
      idPicture: formData.idPicture,
      firstName: '',
      lastName: '',
      gender: 'Male',
      date: '',
      nationality: 'Malawian',
      idNumber: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    // Redirect to DashBord after a short delay
    setTimeout(() => navigate('/DashBord'), 1500);
  };

  return (
    <div>
      <DashHeader />
      <section className="hook">
        <div className="Regmain">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={handleSubmit}>
              <label>Sign up</label>

              {message && <div className="alertB"><p>{message}</p></div>}

              <div className="signup_form">
                <input type="file" name="idPicture" accept="image/*" onChange={handleChange} required />

                <input type="text" name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} required />

                <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} required />

                <select name="gender" id="gender" onChange={handleChange} value={formData.gender} required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>

                <input type="date" name="date" onChange={handleChange} value={formData.date} required />

                <select name="nationality" id="nationality" onChange={handleChange} value={formData.nationality} required>
                  <option value="Malawian">Malawian</option>
                  <option value="Foreign">Foreign</option>
                </select>

                <input type="text" name="idNumber" placeholder="ID number" onChange={handleChange} value={formData.idNumber} required />

                <input type="number" name="phoneNumber" placeholder="Phone number" onChange={handleChange} value={formData.phoneNumber} required />

                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />

                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />

                <input type="password" name="confirmPassword" placeholder="Confirm your Password" onChange={handleChange} value={formData.confirmPassword} required />
              </div>

              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
