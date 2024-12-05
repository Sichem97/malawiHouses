import '../css/Comments.css';
import '../css/ProdManagement.css';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import initialSoldData from '../Data/SoldData';
import initialRentalData from '../Data/RentalData';

export default function ProdManagement() {
  const [user, setUser] = useState({ firstName: 'User' });
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
    <section className='body'>
        <div class="dash">

  {/* <!-- BODY --> */}
  <div class="body">

    {/* <!-- SIDEBAR --> */}
    <div class="sidebar">
      <div class="sidebar__icon">
        <Link to="/DashBord"><i class="fa-solid fa-house"></i></Link>
      </div>

      <div class="sidebar__icon">
        <Link to='/DashAuthentification'><i class="fa-solid fa-users"></i></Link>
      </div>

      <div class="sidebar__icon">
        <Link to='/PostProduct'><i class="fa-solid fa-folder-plus"></i></Link>
      </div>

      <div class="sidebar__icon">
        <Link to='/ProdManagement'><i class="fa-solid fa-list-check"></i></Link>
      </div>

      <div class="sidebar__icon">
      <Link to='/CustomerCare'><i class="fa-solid fa-headset"></i></Link>
      </div>

      <div class="sidebar__icon">
        <Link to='/Register'><i class="fa-solid fa-user-plus"></i></Link>
      </div>

      <div class="sidebar__icon">
        <Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link>
      </div>
    </div>
    {/* <!-- END OF SIDEBAR --> */}

    {/* <!-- MAIN --> */}
    <main class="main">

    {/* <!-- COL-1 --> */}
    <div class="main__col-1">

      {/* <!-- HEADING --> */}
      <div>
        <h2 class="main__heading">
          <span><i class="fa-solid fa-list-check"></i> </span> Product Management</h2>
        <p class="main__desc">Welcome</p>
        <p class="main__sub"><span><i class="fa-solid fa-id-badge"></i></span> <span>{user.firstName}!</span></p>
      </div>

      {/* <!-- LIST --> */}
      <div class="main__list-heading-wrap">
        <h2 class="main__list-heading ss-heading">Recent Activities</h2>
      </div>

      <ul class="main__list">

        <li class="main__list-item">
          <div>
            <p class="main__list-content">Take a clear picture of the ID</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">All different Information form the ID</p>
            <p class="main__list-sub">Is Rejected</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">A wrong ID number</p>
            <p class="main__list-sub">Is Rejected</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">An Unvailable or Wrong Phone number</p>
            <p class="main__list-sub">Is Rejected</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">A wrong Email</p>
            <p class="main__list-sub">Is Rejected</p>
          </div>
        </li>

      </ul>

    </div>

    {/* <!-- COL-2 --> */}
    <div class="main__col-2">
      {/* <!-- CARDS --> */}
      <div class="main__cards-container">

        <div class="main__cards-container-heading-wrap">
          <h2 class="main__cards-container-heading ss-heading">Bord views</h2>
          <a href="#" class="ss-show">show all</a>
        </div>

        <ul class="main__cards">
          <li className="main__card" style={{ "--hue": "25" }}>
           <Link to="#" onClick={() => setActiveTab('rent')}>
           <div class="main__card-image-container">
              <img src="./assets/Special/for_rent.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">For Rent </h3>
            {/* <p class="main__card-heading-sub">Requests</p> */}
            <p class="main__card-heading-type">0</p>
           </Link>
          </li>

          <li className="main__card" style={{ "--hue": "250" }}>
            <Link to="#" onClick={() => setActiveTab('sell')}>
            <div class="main__card-image-container">
              <img src="./assets/Special/for_saleA.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">For Sell</h3>
            {/* <p class="main__card-heading-sub">Approuved</p> */}
            <p class="main__card-heading-type"> 0</p>
            </Link>
          </li>
        </ul>
        

        <div class="main__cards-pagination">
          <span class="ss-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

      </div>

      {/* <!-- CROSSING --> */}
      <div class="main__crossing-container">
        <div class="main__crossing-image">
          <img src="./assets/Special/Houseman.png" alt=""/>
        </div>
        <div class="main__crossing-current">
          <p class="main__crossing-upper">
          Items Views
          </p>
          <h3 class="main__crossing-heading">
            Management
          </h3>
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">

        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading">Items List</h3>
        </div>
        
        <section>
        <div className='Search_Container'>
        <div>
          <span className="current">Category </span> <br />
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
                
                <img src={modalInfo.item.image} alt={modalInfo.item.name} />
                <p><b>Name:</b> {modalInfo.item.name}</p>
                <p><b>Cost:</b> MWK {modalInfo.item.cost}</p>
                <p><b>Location:</b> {modalInfo.item.district}</p>
                <p><b>Date:</b> {modalInfo.item.date}</p>
              </div>
            )}
            <button onClick={handleConfirm} className="btn-confirm">confirm</button>
            <button onClick={closeModal} className="btn-cancel">cancel</button>
          </div>
        </div>
      )}
        </section>

      </div>

      

    </div>

  </main>

</div>

</div>
    </section>
  );
}

