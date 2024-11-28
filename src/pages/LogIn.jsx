import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/LogIn.css';

export default function LogIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('employees')) || [];
    const user = storedUsers.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      navigate('/DashBord');
    } else {
      setError('Invalid email or password. Please try again.');
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <>
      <Header />
      <section className="hook">
        <div className="main">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <label>Log In</label>

              <input
                type="text"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {error && <div className="alert">{error}</div>}

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
