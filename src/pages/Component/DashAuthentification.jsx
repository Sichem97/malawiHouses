import '../css/Comments.css';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


export default function DashAuthentification() {
  const [user, setUser] = useState({ firstName: 'User' });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('registrationRequests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleConfirm = (id) => {
    const position = document.getElementById(`position-${id}`).value;
    if (position === "") {
      alert("Please select a position before confirming.");
      return;
    }

    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status: 'confirmed', position } : req
    );
    localStorage.setItem('registrationRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const confirmedRequest = updatedRequests.find(req => req.id === id);
    localStorage.setItem('employees', JSON.stringify([...employees, confirmedRequest]));
    alert('Registration confirmed!');
  };

  const handleDecline = (id, reason) => {
    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status: 'declined', reason } : req
    );
    localStorage.setItem('registrationRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);

    const declines = JSON.parse(localStorage.getItem('declinedRequests')) || [];
    const declinedRequest = updatedRequests.find(req => req.id === id);
    localStorage.setItem('declinedRequests', JSON.stringify([...declines, declinedRequest]));
    alert('Registration declined!');
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
            <p class="main__list-content">New registration request from Priscilla.</p>
          </div>
        </li>

        <li class="main__list-item">
          <div>
            <p class="main__list-content">New registration request from Sichem.</p>
          </div>
        </li>

        <li class="main__list-item">
          <div>
            <p class="main__list-content">New registration request from Priscilla.</p>
          </div>
        </li>

        <li class="main__list-item">
          <div>
            <p class="main__list-content">New registration request from Yotcheb.</p>
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
              <img src="./assets/Special/employeeA.gif" alt="" class="main__card-image"/>
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
            Request views
          </p>
          <h3 class="main__crossing-heading">
            Authentification
          </h3>
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">
        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading">Registration Requests</h3>
        </div>
        <section className="Cation_Container">
        {requests.filter(req => req.status === 'pending').map(request => (
          <div key={request.id} className="request_card">
            <div>
            <img src={request.idPicture} alt="ID" />
            </div>
            
            <div className='request_card_detail'>
            <div className=''>
            <p>{request.firstName} {request.lastName}</p>
            <p>{request.date}</p>
            <p>{request.gender}</p>
            <br />
            <p>{request.idNumber}</p>
            <p>{request.nationality}</p>
            <p>{request.phoneNumber}</p>
            <p>{request.email}</p>
            </div>

            <div>
              <select id={`position-${request.id}`}>
                <option value="">Select Position</option>
                <option value="CEO">CEO</option>
                <option value="Admin">Admin</option>
                <option value="Customer Care">Customer Care</option>
                <option value="Negotiation Agent">Negotiation Agent</option>
                <option value="Relocation Agent">Relocation Agent</option>
                <option value="Renovation Agent">Renovation Agent</option>
                <option value="Management Agent">Management Agent</option>
                <option value="Maintenance Agent">Maintenance Agent</option>
              </select>

              <div className="confirm">
              <button onClick={() => handleConfirm(request.id)}>Confirm</button>
              </div>
            
              <input type="text" placeholder="Reason for decline" id={`decline-reason-${request.id}`} />
              <div className="declin">
              <button onClick={() => handleDecline(request.id, document.getElementById(`decline-reason-${request.id}`).value)}>Decline</button>
              </div>
            </div>
            </div>

          </div>
        ))}
      </section>

      </div>

      

    </div>

  </main>

</div>

</div>
    </section>
  );
}

