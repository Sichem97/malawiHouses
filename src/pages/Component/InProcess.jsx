import React, { useEffect, useState } from 'react';

export default function InProcess() {
  const [processingItems, setProcessingItems] = useState([]);

  useEffect(() => {
    const storedProcessing = JSON.parse(localStorage.getItem('processing')) || [];
    setProcessingItems(storedProcessing);
  }, []);

  return (
    <div>
      <h2>In Process</h2>
      <div className="card-container">
        {processingItems.map((item, index) => (
          <div key={index} className="application_card">
            <h3 className="text-xl font-bold">{item.name || item.fullName}</h3>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone Number:</strong> {item.phone}</p>
            <p><strong>Department:</strong> {item.department}</p>
            <p><strong>District:</strong> {item.district}</p>
            <p><strong>Message:</strong> {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
