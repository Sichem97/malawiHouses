import '../css/Comments.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [user, setUser] = useState({ firstName: 'User' });
  const [formData, setFormData] = useState({
    idPicture: '',
    firstName: '',
    lastName: '',
    gender: 'Male',
    date: '',
    nationality: 'Malawian',
    idNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: URL.createObjectURL(files[0])
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
    const today = new Date();
    const birthDate = new Date(formData.date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setMessage('+18 required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...formData,
      position: '',
      status: 'pending'
    };

    const storedRequests = JSON.parse(localStorage.getItem('registrationRequests')) || [];
    localStorage.setItem('registrationRequests', JSON.stringify([...storedRequests, newRequest]));
    setMessage('Registration successful!');

    // Clear all the inputs except the file input
    setFormData({
      idPicture: formData.idPicture,
      firstName: '',
      lastName: '',
      gender: 'Male',
      date: '',
      nationality: 'Malawian',
      idNumber: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    // Redirect to DashBord after a short delay
    setTimeout(() => navigate('/DashBord'), 1500);
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
          <span><i class="fa-solid fa-user-plus"></i> </span> Registration</h2>
        <p class="main__desc">Welcome</p>
        <p class="main__sub"><span><i class="fa-solid fa-id-badge"></i></span> <span>{user.firstName}!</span></p>
      </div>

      {/* <!-- LIST --> */}
      <div class="main__list-heading-wrap">
        <h2 class="main__list-heading ss-heading">Requirements</h2>
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

      {/* <!-- CROSSING --> */}
      <div class="main__crossing-container">
        <div class="main__crossing-image">
          <img src="./assets/Special/Houseman.png" alt=""/>
        </div>
        <div class="main__crossing-current">
          <p class="main__crossing-upper">
          Registration
          </p>
          <h3 class="main__crossing-heading">
            Form
          </h3>
        </div>
      </div>

      {/* <!-- DISCOVER --> */}
      <div class="main__discover">

        <div class="main__discover-heading-container">
          <h3 class="main__discover-heading ss-heading"><label>Sign up</label></h3>
        </div>
        
        <section className="hook">
        <div className="Regmain">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={handleSubmit}>
              

              {message && <div className="alertB"><p>{message}</p></div>}

              <div className="signup_form">
                <input type="file" name="idPicture" accept="image/*" onChange={handleChange} required />

                <input type="text" name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} required />

                <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} required />

                <select name="gender" id="gender" onChange={handleChange} value={formData.gender} required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>

                <input type="date" name="date" onChange={handleChange} value={formData.date} required />

                <select name="nationality" id="nationality" onChange={handleChange} value={formData.nationality} required>
                  <option value="Malawian">Malawian</option>
                  <option value="Foreign">Foreign</option>
                </select>

                <input type="text" name="idNumber" placeholder="ID number" onChange={handleChange} value={formData.idNumber} required />

                <input type="number" name="phoneNumber" placeholder="Phone number" onChange={handleChange} value={formData.phoneNumber} required />

                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />

                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />

                <input type="password" name="confirmPassword" placeholder="Confirm your Password" onChange={handleChange} value={formData.confirmPassword} required />
              </div>

              <button type="submit">Sign up</button>
            </form>
          </div>
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

