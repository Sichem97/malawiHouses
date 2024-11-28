import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProdManagement.css';
import DashHeader from './DashHeader';
import initialSoldData from '../Data/SoldData';
import initialRentalData from '../Data/RentalData';

export default function ProdManagement() {
  const [activeTab, setActiveTab] = useState('rent');
  const [filter, setFilter] = useState({ category: 'none', district: 'none' });
  const [soldData, setSoldData] = useState([]);
  const [rentalData, setRentalData] = useState([]);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, item: null, type: '', action: '' });

  useEffect(() => {
    const storedSoldData = JSON.parse(localStorage.getItem('soldData')) || initialSoldData;
    const storedRentalData = JSON.parse(localStorage.getItem('rentalData')) || initialRentalData;
    setSoldData(storedSoldData);
    setRentalData(storedRentalData);
  }, []);

  const saveToLocalStorage = (data, type) => {
    localStorage.setItem(type === 'rent' ? 'rentalData' : 'soldData', JSON.stringify(data));
  };

  const handleDelete = (id, type) => {
    if (type === 'rent') {
      const updatedData = rentalData.map(cat => ({
        ...cat,
        houses: cat.houses.filter(house => house.id !== id)
      }));
      setRentalData(updatedData);
      saveToLocalStorage(updatedData, 'rent');
    } else {
      const updatedData = soldData.map(cat => ({
        ...cat,
        houses: cat.houses.filter(house => house.id !== id)
      }));
      setSoldData(updatedData);
      saveToLocalStorage(updatedData, 'sell');
    }
  };

  const openModal = (item, type, action) => {
    setModalInfo({ isOpen: true, item, type, action });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, item: null, type: '', action: '' });
  };

  const handleConfirm = () => {
    const { item, type } = modalInfo;
    if (modalInfo.action === 'delete') {
      handleDelete(item.id, type);
    }
    closeModal();
  };

  const handleShowMore = (item) => {
    openModal(item, activeTab, 'info');
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  const filterData = (data) => {
    return data.map(cat => ({
      ...cat,
      houses: cat.houses.filter(house => (
        (filter.category === 'none' || house.category === filter.category) &&
        (filter.district === 'none' || house.district === filter.district)
      ))
    }));
  };

  const filteredData = activeTab === 'rent' ? filterData(rentalData) : filterData(soldData);

  return (
    <div className='Main_Prod'>
      <DashHeader />

      <div className='Link_Container'>
        <Link to="#" onClick={() => setActiveTab('rent')}> For Rent </Link>
        <Link to="#" onClick={() => setActiveTab('sell')}> For Sell </Link>
      </div>

      <div className='Search_Container'>
        <div>
          <span className="current">Category </span>
          <select name="category" id="Category" onChange={handleFilterChange}>
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
          <span className="current">District </span>
          <select name="district" id="District" onChange={handleFilterChange}>
            <optgroup>
              <option value="none">none</option>
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
            </optgroup>
          </select>
        </div>
      </div>

      <section className='Item_Container'>
        <div className='Box_Container'>
          <h1>{activeTab === 'rent' ? 'Renting Services' : 'Selling Services'}</h1>
          {filteredData.map((category) => (
            <div key={category.category} className='Box_Item'>
              <h2>{category.category}</h2>
              {category.houses.map((product) => (
                <div key={product.id} className='Box_Items'>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <b>{product.name}</b>
                    <i>MWK : {product.cost}</i>
                    <p>Location : {product.district}</p>
                    <i>{product.date}</i>
                  </div>
                  <section>
                    <button onClick={() => handleShowMore(product)}>Info</button>
                    <span>
                      <button onClick={() => openModal(product, activeTab, 'delete')}>delete</button>
                    </span>
                  </section>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {modalInfo.isOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h3><i className="fa-solid fa-triangle-exclamation"></i> {modalInfo.action === 'delete' ? 'Delete' : 'Info'}</h3>
            {modalInfo.action === 'delete' ? (
              <p>Are you sure you want to delete this item?</p>
            ) : (
              <div className=''>
                <p><b>Name:</b> {modalInfo.item.name}</p>
                <p><b>Cost:</b> MWK {modalInfo.item.cost}</p>
                <p><b>Location:</b> {modalInfo.item.district}</p>
                <p><b>Date:</b> {modalInfo.item.date}</p>
                <img src={modalInfo.item.image} alt={modalInfo.item.name} />
              </div>
            )}
            <button onClick={handleConfirm} className="btn-confirm">confirm</button>
            <button onClick={closeModal} className="btn-cancel">cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
