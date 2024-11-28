import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [rentalData, setRentalData] = useState([]);

  useEffect(() => {
    const storedRentalData = JSON.parse(localStorage.getItem('rentalData')) || [];
    setRentalData(storedRentalData);
  }, []);

  return (
    <RentalContext.Provider value={{ rentalData, setRentalData }}>
      {children}
    </RentalContext.Provider>
  );
};
