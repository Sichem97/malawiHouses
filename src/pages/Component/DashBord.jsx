import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
import '../css/DashBord.css';

export default function DashBord() {
  const [user, setUser] = useState({ firstName: 'User' });
  const [stats, setStats] = useState({
    pendingRequests: 0,
    employees: 0,
    products: 0
  });

  useEffect(() => {
    // Fetch user details and statistics here
    const storedUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: 'User' };
    setUser(storedUser);

    const registrationRequests = JSON.parse(localStorage.getItem('registrationRequests')) || [];
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    setStats({
      pendingRequests: registrationRequests.filter(req => req.status === 'pending').length,
      employees: employees.length,
      products: products.length
    });
  }, []);

  return (
    <div>
      <DashHeader />
      <div className="dashboard-content">
        <div className="greeting">
          <h1>Welcome, {user.firstName}!</h1>
        </div>
        
        <div className="stats-overview">
          <div className="stat-item">
            <h2>Pending Requests</h2>
            <p>{stats.pendingRequests}</p>
          </div>
          <div className="stat-item">
            <h2>Employees</h2>
            <p>{stats.employees}</p>
          </div>
          <div className="stat-item">
            <h2>Products</h2>
            <p>{stats.products}</p>
          </div>
        </div>

        <div className="quick-links">
          <Link to="/DashAuthentification" className="quick-link">Manage Requests</Link>
          <Link to="/Employee" className="quick-link">Manage Employees</Link>
          <Link to="/ProdManagement" className="quick-link">Product Management</Link>
        </div>

        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>User John Doe added a new product.</li>
            <li>Employee Jane Smith was promoted to Admin.</li>
            <li>New registration request from Alice Johnson.</li>
          </ul>
        </div>

        <div className="notifications">
          <h2>Notifications</h2>
          <p>No new notifications</p>
        </div>
        
        <div className="quick-actions">
          <Link to="/Register" className="quick-action">Add New Product</Link>
          <Link to="/PostProduct" className="quick-action">Add New User</Link>
        </div>
      </div>
    </div>
  );
}
