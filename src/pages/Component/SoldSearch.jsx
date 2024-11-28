import React, { useState } from 'react';
import '../css/SoldSearch.css';

export default function SoldSearch({ onFilterChange }) {
  const [category, setCategory] = useState('none');
  const [district, setDistrict] = useState('none');
  const [amount, setAmount] = useState('none');

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    if (newCategory === 'none') {
      setDistrict('none');
      setAmount('none');
      onFilterChange({
        category: 'none',
        district: 'none',
        amount: 'none',
      });
    } else {
      onFilterChange({
        category: newCategory,
        district,
        amount,
      });
    }
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setDistrict(newDistrict);
    onFilterChange({
      category,
      district: newDistrict,
      amount,
    });
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    onFilterChange({
      category,
      district,
      amount: newAmount,
    });
  };

  return (
    <div className="Sold_search"> 
      <div className="Sold_title">
        <h1>Search by</h1>
      </div>

      <div className='Sold_option'>
        <div>
         <span className="current">Category : </span>
            <select name="category" id="Category" value={category} onChange={handleCategoryChange}>
                <optgroup> 
                    <option value="none">none</option>
                    <option value="Building">Building</option>
                    <option value="Business">Business</option>
                    <option value="Hotel & Motel">Hotel & Motel</option>
                    <option value="House">House</option>
                    <option value="Office">Office</option>
                    <option value="Shop">Shop</option>
                </optgroup>
            </select>
        </div>

        <div>
          <span className="current">District : </span>
            <select name="district" id="District" value={district} onChange={handleDistrictChange} disabled={category === 'none'}>
              <optgroup> 
                <option value="none">none</option>
                <option value="Balaka ">Balaka</option>
                <option value="Blantyre ">Blantyre</option>
                <option value="Chikhwawa ">Chikhwawa</option>
                <option value="Chiradzulu ">Chiradzulu</option>
                <option value="Chitipa">Chitipa</option>
                <option value="Dedza">Dedza</option>
                <option value="Dowa">Dowa</option>
                <option value="Karonga">Karonga</option>
                <option value="Kasungu">Kasungu</option>
                <option value="Lilongwe">Lilongwe</option>
                <option value="Machinga ">Machinga</option>
                <option value="Mangochi ">Mangochi</option>
                <option value="Mchinji">Mchinji</option>
                <option value="Mulanje ">Mulanje</option>
                <option value="Mwanza ">Mwanza</option>
                <option value="Mzimba">Mzimba</option>
                <option value="Neno ">Neno</option>
                <option value="Nkhata Bay">Nkhata Bay and Likoma</option>
                <option value="Nkhotakota">Nkhotakota</option>
                <option value="Nsanje ">Nsanje</option>
                <option value="Ntcheu">Ntcheu</option>
                <option value="Ntchisi">Ntchisi</option>
                <option value="Phalombe ">Phalombe</option>
                <option value="Rumphi">Rumphi</option>
                <option value="Salima">Salima</option>
                <option value="Southern ">Southern</option>
                <option value="Thyolo ">Thyolo</option>
                <option value="Zomba ">Zomba</option>
              </optgroup>
            </select>
        </div>
        
        <div>
          <span className="current"> Amount : </span>
            <select name="amount" id="Amount" value={amount} onChange={handleAmountChange} >
              <optgroup> 
                <option value="none">none</option>
                <option value="<499000">Bellow Mk 499.000</option>
                <option value="500000-1000000">Mk 500.000 - Mk 999.000</option>
                <option value="1000000-1999000">Mk 1.000.000 - Mk 1.999.000</option>
                <option value="2000000-2999000">Mk 2.000.000 - Mk 2.999.000</option>
                <option value="3000000-3999000">Mk 3.000.000 - Mk 3.999.000</option>
                <option value="4000000-4999000">Mk 4.000.000 - Mk 4.999.000</option>
                <option value="5000000-5999000">Mk 5.000.000 - Mk 5.999.000</option>
                <option value="6000000-6999000">Mk 6.000.000 - Mk 6.999.000</option>
                <option value=">7000000"> Above Mk 7.000.000</option>
              </optgroup>
            </select>
        </div>
      </div>
    </div>
  );
}
