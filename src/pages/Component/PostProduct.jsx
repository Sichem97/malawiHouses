import '../css/Comments.css';
import '../css/PostProduct.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function PostProduct() {
  const [user, setUser] = useState({ firstName: 'User' });

  const [formData, setFormData] = useState({
    cover: '',
    morePictures: [],
    name: '',
    cost: '',
    sector: 'none',
    category: 'none',
    district: 'none',
    details: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    ownerMessage: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: Array.from(files).map(file => URL.createObjectURL(file))
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData;
    let localStorageKey;

    if (formData.sector === 'none' || formData.category === 'none' || formData.district === 'none') {
      alert('Please select a valid sector, category, and district');
      return;
    }

    const newProduct = {
      id: Date.now(),  // Generate a unique ID
      name: formData.name,
      image: formData.cover,
      description: formData.details,
      details: formData.ownerMessage,
      district: formData.district,
      cost: formData.cost,
      category: formData.category
    };

    if (formData.sector === 'Renting') {
      localStorageKey = 'rentalData';
    } else {
      localStorageKey = 'soldData';
    }

    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.map(cat => 
      cat.category === formData.category
        ? { ...cat, houses: [...cat.houses, newProduct] }
        : cat
    );

    newData = updatedData.some(cat => cat.category === formData.category)
      ? updatedData
      : [...storedData, { category: formData.category, houses: [newProduct] }];

    localStorage.setItem(localStorageKey, JSON.stringify(newData));
    alert('Product added successfully!');
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
          <span><i class="fa-solid fa-folder-plus"></i> </span> New Product</h2>
        <p class="main__desc">Welcome</p>
        <p class="main__sub"><span><i class="fa-solid fa-id-badge"></i></span> <span>{user.firstName}!</span></p>
      </div>

      {/* <!-- LIST --> */}
      <div class="main__list-heading-wrap">
        <h2 class="main__list-heading ss-heading">Recent Activities</h2>
        <a href="#" class="ss-show">show all</a>
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
      

      {/* <!-- CROSSING --> */}
      <div class="main__crossing-container">
        <div class="main__crossing-image">
          <img src="./assets/Special/Houseman.png" alt=""/>
        </div>
        <div class="main__crossing-current">
          <p class="main__crossing-upper">
            Post Item
          </p>
          <h3 class="main__crossing-heading">
            General form
          </h3>
          
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">

        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading">Form</h3>
          {/* <a href="#" class="ss-show">show all</a> */}
        </div>

        <section className='Post_Section'>
        <div className='Post_Div'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Product Details</label>
              <div className='Post_form'>
                <div className="Post_form_comment">
                  <div className="Post_form-group_Pro">
                    <i>Cover</i>
                    <input type="file" name="cover" accept="image/*" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>More Pictures</i>
                    <input type="file" name="morePictures" accept="image/*" onChange={handleChange} multiple required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>Name</i>
                    <input type="text" name="name" placeholder='Product Name' onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>MWK</i>
                    <input type="number" name="cost" placeholder='Amount' onChange={handleChange} required />
                  </div>
                </div>
                <div className="Post_form_comment">
                  <div className="Post_form-group_Pro">
                    <i>Sector</i>
                    <select name="sector" id="Sector" onChange={handleChange} required>
                      <option value="none">none</option>
                      <option value="Renting">Renting</option>
                      <option value="Selling">Selling</option>
                    </select>
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>Category</i>
                    <select name="category" id="Category" onChange={handleChange} required>
                        <option value="none">none</option>
                        <option value="Building">Building</option>
                        <option value="Business">Business</option>
                        <option value="Hotel & Motel">Hotel & Motel</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Shop">Shop</option>
                    </select>
                  </div>
                  <div className="Post_form-group_Pro">
                    <i>District</i>
                    <select name="district" id="District" onChange={handleChange} required>
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
                      <option value="Nkhata Bay">Nkhata Bay</option>
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
                    </select>
                  </div>
                  <div className="Post_form-group">
                    <div className="form-group message">
                      <i className="fa fa-pencil"></i>
                      <textarea name="details" rows="7" placeholder="More Details and Requirements" onChange={handleChange}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>Owner Details</label>
              <div className="Post_form">
                <div className="Post_form_comment">
                  <div className="Post_form-group">
                    <i className="fa fa-user"></i>
                    <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-user"></i>
                    <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-phone"></i>
                    <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                  </div>
                  <div className="Post_form-group">
                    <i className="fa fa-envelope"></i>
                    <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                  </div>
                </div>
                <div className="Post_form_comment">
                  <div className="Post_form-group message">
                    <i className="fa fa-pencil"></i>
                    <textarea name="ownerMessage" rows="7" placeholder="Type Your Message Here" onChange={handleChange}></textarea>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form_group button">
              <button type="submit" className="btn primary"><i className="fa fa-send"></i>Submit</button>
            </div>
          </form>
        </div>
        </section>

      </div>



    </div>

  </main>

</div>

</div>
    </section>
  );
}

