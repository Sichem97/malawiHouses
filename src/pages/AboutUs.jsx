import React from 'react';
import './css/AboutUs.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const teamMembers = [
        { name: 'Sichem M.', role: 'CEO & Founder', image: '/assets/Profile/profile2.png' },
        { name: 'Memory N.', role: 'Head of Marketing', image: '/assets/Profile/profile4.png' },
        { name: 'Priscilla', role: 'Head of Marketing', image: '/assets/Profile/profile1.png' },
        { name: 'Yotcheb K.', role: 'Chief Technology Officer', image: '/assets/Profile/profile3.png' },
    ];

    return (
        <>
            <Header />

            <div className="breadcrumbs_About">
                <div className="breadcrumbs_row_About">
                    <div className="section-title">
                        <h2>About Us</h2>
                        <img src="/assets/carry2.png" alt="logo2_picture" />                            
                        <ul className="bread-list">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><i className="fa fa-angle-double-right"></i></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="about-us">
                <div className="intro">
                    <div className='intro-info'>
                        <h2>We Deliver Happiness</h2>
                        <p>Welcome to Malawi Houses, your one-stop solution for all real estate needs in Malawi. Whether you're looking to buy, sell, or rent properties, we've got you covered. Our services extend beyond just transactions; we also offer property insurance, management, relocation, renovation, and maintenance. Our mission is to make your real estate journey seamless and enjoyable.</p>
                    </div>
                </div>

                <section className="mission-vision">
                    <div className="mission">
                        <h2>Our Mission</h2>
                        <p id='p'>Our mission is to make property transactions and management frictionless and secure. We strive to provide a comprehensive suite of services that empower our clients to achieve their real estate goals efficiently and effectively.</p>
                    </div>
                    <div className="vision">
                        <h2>Our Vision</h2>
                        <p id='p'>Our vision is to be the leading real estate platform that empowers individuals and businesses to find their dream homes, invest wisely, and manage their properties with ease. We aim to transform the real estate industry through innovation, integrity, and exceptional customer service.</p>
                    </div>
                </section>

                <section className="values">
                    <h2>Our Values</h2>
                    <p id='p'>We believe in integrity, community, and innovation. These values guide us in every decision we make. Integrity ensures that we operate transparently and ethically, community fosters collaboration and support, and innovation drives us to continuously improve and adapt in a rapidly changing world.</p>
                </section>

                <section className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-members">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                {/* <p>{member.role}</p> */}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="contact">
                    <div>
                        <h2>Contact Us</h2>
                        <p id='p'>If you have any questions or inquiries, feel free to reach out to us. Our team is here to assist you and ensure your experience with our services is exceptional.</p>
                        <p id='p'>Email: <a href="mailto:info@malawihouse.com">info@malawihouse.com</a></p>
                        <p id='p'>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    </div>
                </section>

                <section className="partners">
                    <h2>In Partnership with</h2>
                    <div className="partner-logos">
                        <img src="/assets/Special/QmarkA.png" alt="Partner 1" />
                        <img src="/assets/Special/QmarkA.png" alt="Partner 2" />
                        <img src="/assets/Special/QmarkA.png" alt="Partner 3" />
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;
