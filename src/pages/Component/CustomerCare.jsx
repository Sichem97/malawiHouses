import '../css/Comments.css';
import '../css/CustomerCare.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function CustomerCare() {

  const [user, setUser] = useState({ firstName: 'User' });
  const [applications, setApplications] = useState([]);
  const [offers, setOffers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeSection, setActiveSection] = useState('Applications');
  const [modalInfo, setModalInfo] = useState({ isOpen: false, item: null, type: '', action: '' });
  const navigate = useNavigate();
 
  useEffect(() => {
    // Fetch user details and statistics here
    const storedUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: 'User' };
    setUser(storedUser);

    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    const storedOffers = JSON.parse(localStorage.getItem('offers')) || [];
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    setApplications(storedApplications);
    setOffers(storedOffers);
    setContacts(storedContacts);
  }, []);
 
  const openModal = (item, type, action) => {
    setModalInfo({ isOpen: true, item, type, action });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, item: null, type: '', action: '' });
  };

  const handleConfirm = () => {
    const { item, type, action } = modalInfo;

    if (action === 'delete') {
      if (type === 'application') {
        setApplications(applications.filter((_, index) => index !== item));
        localStorage.setItem('applications', JSON.stringify(applications.filter((_, index) => index !== item)));
      } else if (type === 'offer') {
        setOffers(offers.filter((_, index) => index !== item));
        localStorage.setItem('offers', JSON.stringify(offers.filter((_, index) => index !== item)));
      } else if (type === 'contact') {
        setContacts(contacts.filter((_, index) => index !== item));
        localStorage.setItem('contacts', JSON.stringify(contacts.filter((_, index) => index !== item)));
      }
    } else if (action === 'processing') {
      const processingItems = JSON.parse(localStorage.getItem('processing')) || [];
      processingItems.push({ ...item, type });
      localStorage.setItem('processing', JSON.stringify(processingItems));
      navigate('/CustomerCare');
    }

    closeModal();
  };

  const renderContacts = () => (
    <>
      <h2>Contacts</h2>
      <div className="card-container">
        {contacts.map((contact, index) => (
          <div key={index} className="application_card">
            <h3 className="text-xl font-bold">{contact.name}</h3>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone Number:</strong> {contact.phone}</p>
            <p><strong>Department:</strong> {contact.department}</p>
            <p><strong>District:</strong> {contact.district}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            
            <button onClick={() => openModal(contact, 'contact', 'processing')} className="btn-confirm">
              <i class="fa-solid fa-check"></i>
            </button>
            <button onClick={() => openModal(index, 'contact', 'delete')} className="btn-cancel">
              <i class="fa-solid fa-trash-can"></i>
            </button>

          </div>
        ))}
      </div>
    </>
  );

  const renderOffers = (filter) => (
    <>
      <h2>Offers</h2>
      <div className="card-container">
        {offers
          .filter((offer) => offer.service === filter)
          .map((offer, index) => (
            <div key={index} className="application_card">
              <h3 className="text-xl font-bold">{offer.name}</h3>
              <p><strong>Email:</strong> {offer.email}</p>
              <p><strong>Phone Number:</strong> {offer.phone}</p>
              <p><strong>Service:</strong> {offer.service}</p>
              <p><strong>Department:</strong> {offer.department}</p>
              <p><strong>District:</strong> {offer.district}</p>
              <p><strong>Message:</strong> {offer.message}</p>

              <button onClick={() => openModal(offer, 'offer', 'processing')} className="btn-confirm">
                <i class="fa-solid fa-check"></i>
              </button>
              <button onClick={() => openModal(index, 'offer', 'delete')} className="btn-cancel">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
      </div>
    </>
  );

  const renderApplications = () => (
    <>
      <h2>Applications</h2>
      <div className="card-container">
        {applications.map((app, index) => (
          <div key={index} className="application_card">
            <h3 className="text-xl font-bold">{app.product.name}</h3>
            <p><strong>Full Name:</strong> {app.fullName}</p>
            <p><strong>Phone Number:</strong> {app.phoneNumber}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>District:</strong> {app.product.district}</p>
            <p><strong>Amount:</strong> MW {app.product.cost}</p>
            <p><strong>Source:</strong> {app.source}</p>
            
                <button onClick={() => openModal(app, 'application', 'processing')} className="btn-confirm">process</button>

                <button onClick={() => openModal(index, 'application', 'delete')} className="btn-cancel"><i class="fa-solid fa-trash-can"></i></button>
              
          </div>
        ))}
      </div>
    </>
  );


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
          <span><i class="fa-solid fa-headset"></i> </span> Customer Care</h2>
        <p class="main__desc">Welcome</p>
        <p class="main__sub"><span><i class="fa-solid fa-id-badge"></i></span> <span>{user.firstName}!</span></p>
      </div>

      {/* <!-- LIST --> */}
      <div class="main__list-heading-wrap">
        <h2 class="main__list-heading ss-heading">Recent Activities</h2>
      </div>

      <ul class="main__list">

        <li class="main__list-item">
          <div class="main__list-content-wrap">
          <p class="main__list-content">Post N~15B5GK816</p>
          <p class="main__list-sub"> aprouved</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">Post N~15B5GK816</p>
            <p class="main__list-sub"> aprouved</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-item-image">
            <img src="https://images.unsplash.com/photo-1470218091926-22a08a325802?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40" alt=""/>
          </div>
          <div class="main__list-content-wrap">
            <p class="main__list-content">Yotcheb K.</p>
            <p class="main__list-sub">50 houses Coming soon</p>
          </div>
        </li>
        
        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">Post N~15B5GK816</p>
            <p class="main__list-sub">Rejected</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">Blantyr</p>
            <p class="main__list-sub">2 Houses trending</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-item-image">
            <img src="https://images.unsplash.com/photo-1575279146056-963c4a35627b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40" alt=""/>
          </div>
          <div class="main__list-content-wrap">
            <p class="main__list-content">Priscilla </p>
            <p class="main__list-sub">Has launched 10 houses in Lilongwe</p>
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
        </div>

        <ul class="main__cards">
          <li className="main__card" style={{ "--hue": "25" }}>
           <Link to="#" onClick={() => setActiveSection('Applications')}>
           <div class="main__card-image-container">
              <img src="./assets/Special/request.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Requests </h3>
            {/* <p class="main__card-heading-sub">Requests</p> */}
            <p class="main__card-heading-type"> 0</p>
           </Link>
          </li>

          <li className="main__card" style={{ "--hue": "250" }}>
            <Link to="#" onClick={() => setActiveSection('Contacts')}>
            <div class="main__card-image-container">
              <img src="./assets/Special/contact.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Contact</h3>
            {/* <p class="main__card-heading-sub">Approuved</p> */}
            <p class="main__card-heading-type"> 0</p>
            </Link>
          </li>

          <li className="main__card" style={{ "--hue": "231" }}>
            <Link to="#" onClick={() => setActiveSection('Offers')}>
            <div class="main__card-image-container">
              <img src="./assets/Special/offers.png" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Offers</h3>
            {/* <p class="main__card-heading-sub">In store</p> */}
            <p class="main__card-heading-type">
            0
            </p>
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
            Product views
          </p>
          <h3 class="main__crossing-heading">
            Center Management
          </h3>
          
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">

        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading">Bord Management</h3>
          {/* <a href="#" class="ss-show">show all</a> */}
        </div>

        <div className="applications">
          {activeSection === 'Contacts' && renderContacts()}
          {activeSection === 'Offers' && renderOffers('For Sell')}
          {activeSection === 'Applications' && renderApplications()}
          {activeSection === 'For Rent' && renderApplications()}
          {activeSection === 'For Sell' && renderApplications()}
          {activeSection === 'Offers Rent' && renderOffers('For Rent')}
          {activeSection === 'Offers Sell' && renderOffers('For Sell')}
        </div>

        {modalInfo.isOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h3><i className="fa-solid fa-triangle-exclamation"></i> {modalInfo.action}</h3>
            <p>Are you sure you want to {modalInfo.action} this item?</p>
            <button onClick={handleConfirm} className="btn-confirm">confirm</button>
            <button onClick={closeModal} className="btn-cancel">cancel</button>
          </div>
        </div>
      )}

      </div>



    </div>

  </main>

</div>

</div>
    </section>
  );
}

