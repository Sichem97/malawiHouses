import React from 'react';
import './css/AboutUs.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    const teamMembers = [
        { name: 'Sichem M.', role: 'role', image: './assets/Profile/profile2.png' },
        { name: 'Yotcheb K.', role: 'role', image: './assets/Profile/profile3.png' },
        { name: 'Priscilla ', role: 'role', image: './assets/Profile/profile1.png' },
    ];

    return (
        <>
            <Header/>

            <>
            {/* Breadcrumbs  */}
            <div class="breadcrumbs_About">
                <div class="breadcrumbs_row_About">
                    <div class="section-title">
                        <h2>About-Us</h2>
                        <img src="assets/carry2.png" alt="logo2_picture"/>							
                        <ul class="bread-list">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><i class="fa fa-angle-double-right"></i></li>
                            <li class="active">About-Us</li>
                        </ul>
                    </div>
                </div>
            </div>
		    {/* End Breadcrumbs  */}
            </>
            
            <div className="about-us">
                    <div class="intro">
                        <div className='intro-info'>
                            <h2>We Deliver Happiness</h2>
                            <p>The greatest, most sustainable happiness comes from making others happy.
                            It is our privilege to deliver you happiness every single day.</p>
                    </div>
                    </div>

                    <section className="mission-vision">
                        <div className="mission">
                            <h2>Our Mission</h2>
                            <p id='p'>Make communications frictionless and secure.</p>
                        </div>
                        <div className="vision">
                            <h2>Our Vision</h2>
                            <p id='p'>Communications empowering people to accomplish more.</p>
                        </div>
                    </section>

                    <section className="values">
                        <h2>Our Values</h2>
                        <p id='p'>We believe in integrity, community, and innovation. Our values guide us in every decision we make.</p>
                    </section>

                    <section className="team">
                        <h2>Meet Our Team</h2>
                        <div className="book-effect"></div>
                        <div className="team-members">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-member">
                                    <img src={member.image} alt={member.name} />
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="contact">
                        <h2>Contact Us</h2>
                        <p id='p'>If you have any questions or inquiries, feel free to reach out!</p>
                        <p id='p'>Email: <a href="mailto:info@malawihouse.com">info@malawihouse.com</a></p>
                        <p id='p'>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    </section>

                    <section className="partners">
                        <h2>In Parternership with</h2>
                        <div className="partner-logos">
                            <img src="house-1867187_1280.jpg" alt="Partner 1" />
                            <img src="house-1867187_1280.jpg" alt="Partner 2" />
                            <img src="house-1867187_1280.jpg" alt="Partner 3" />
                        </div>
                    </section>
            </div>

            <Footer/>
        </>
    );
};

export default AboutUs;
