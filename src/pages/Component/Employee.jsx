import '../css/Comments.css';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


export default function Employee() {
  const [user, setUser] = useState({ firstName: 'User' });
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
          <span><i class="fa-solid fa-users"></i> </span> User Management</h2>
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
            <p class="main__list-content">Employee Yotcheb K. was promoted to Admin</p>
          </div>
        </li>

        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">Registration N~16</p>
            <p class="main__list-sub">Rejected</p>
          </div>
        </li>
        
        <li class="main__list-item">
          <div class="main__list-content-wrap">
            <p class="main__list-content">Registration N~57</p>
            <p class="main__list-sub">Successful</p>
          </div>
        </li>

        <li class="main__list-item">
          <div>
            <p class="main__list-content">New registration request from Priscilla.</p>
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
           <Link to="/DashAuthentification">
           <div class="main__card-image-container">
              <img src="./assets/Special/loading.webp" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Pending </h3>
            <p class="main__card-heading-sub">Requests</p>
            <p class="main__card-heading-type">
              <i class="fa-solid fa-spinner fa-spin-pulse"></i>
              0</p>
           </Link>
          </li>

          <li className="main__card" style={{ "--hue": "250" }}>
            <Link to="/Employee">
            <div class="main__card-image-container">
              <img src="./assets/Special/employee.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Employees</h3>
            <p class="main__card-heading-sub">Approuved</p>
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
            Employee views
          </p>
          <h3 class="main__crossing-heading">
            Management
          </h3>
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">

        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading">Employee List</h3>
        </div>
        
        <section>
        <input type="text" placeholder="Search by ID number" value={searchTerm} onChange={handleSearchChange} />

        <section className="Cation_Container">
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
        </section>

      </div>

      

    </div>

  </main>

</div>

</div>
    </section>
  );
}

