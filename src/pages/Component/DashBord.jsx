import '../css/Comments.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


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
          <span><i class="fa-solid fa-square-poll-vertical"></i> </span> DashBord</h2>
        <p class="main__desc">Welcome</p>
        <p class="main__sub"><span><i class="fa-solid fa-id-badge"></i></span> <span>{user.firstName}!</span></p>
      </div>

      {/* <!-- LIST --> */}
      <div class="main__list-heading-wrap">
        <h2 class="main__list-heading ss-heading">Recent Activities</h2>
        {/* <a href="#" class="ss-show">show all</a> */}
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
            <p class="main__list-content">Registration N~57</p>
            <p class="main__list-sub">Successful</p>
          </div>
        </li>

        <li class="main__list-item">
          <div>
            <p class="main__list-content">New registration request from Priscilla.</p>
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
           <Link to="/DashAuthentification">
           <div class="main__card-image-container">
              <img src="./assets/Special/loading.webp" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Pending </h3>
            <p class="main__card-heading-sub">Requests</p>
            <p class="main__card-heading-type">
              <i class="fa-solid fa-spinner fa-spin-pulse"></i>
              {stats.pendingRequests}</p>
           </Link>
          </li>

          <li className="main__card" style={{ "--hue": "250" }}>
            <Link to="/Employee">
            <div class="main__card-image-container">
              <img src="./assets/Special/employee.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Employees</h3>
            <p class="main__card-heading-sub">Approuved</p>
            <p class="main__card-heading-type">
              {stats.employees}</p>
            </Link>
          </li>

          <li className="main__card" style={{ "--hue": "231" }}>
            <Link to="/ProdManagement">
            <div class="main__card-image-container">
              <img src="./assets/Special/giphy.gif" alt="" class="main__card-image"/>
            </div>
            <h3 class="main__card-heading">Products</h3>
            <p class="main__card-heading-sub">In store</p>
            <p class="main__card-heading-type">
            {stats.products}
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
          {/* <div class="main__cards-buttons">
          <button style={{ opacity: 0.4 }}><i class="fa-solid fa-arrow-left-long"></i></button>

          <button><i class="fa-solid fa-arrow-right-long"></i></button>
          </div> */}
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
        </div>

        <ul class="main__discover-places">

          <li class="main__discover-place">
            <h4 class="main__discover-place-heading">Pending Request</h4>
            <p class="main__discover-place-sub">0</p>
            <div class="main__discover__more">
            <div className="main__discover__more-svg" style={{ background: "#965520" }} >
            <i class="fa-solid fa-bell"></i>
              </div>
              <span class="ss-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </li>

          <li class=" main__discover-place">
            <h4 class="main__discover-place-heading">Rejected</h4>
            <p class="main__discover-place-sub">0</p>
            <div class="main__discover__more">
              <div className="main__discover__more-svg" style={{ background: "#be3c40" }} >
              <i class="fa-solid fa-thumbs-down"></i>
              </div>
              <span class="ss-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </li>

          <li class="main__discover-place">
            <h4 class="main__discover-place-heading">Approuved</h4>
            <p class="main__discover-place-sub">0</p>
            <div class="main__discover__more">
              <div class="main__discover__more-svg" style={{ background: "#209647" }}>
              <i class="fa-solid fa-thumbs-up"></i>
              </div>
              <span class="ss-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </li>

          <li class="main__discover-place">
            <h4 class="main__discover-place-heading">Store</h4>
            <p class="main__discover-place-sub">0</p>
            <div class="main__discover__more">
              <div class="main__discover__more-svg" style={{ background: "#204596" }}>
              <i class="fa-solid fa-rectangle-list"></i>
              </div>
              <span class="ss-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </li>

        </ul>

      </div>



    </div>

  </main>

</div>

</div>
    </section>
  );
}

