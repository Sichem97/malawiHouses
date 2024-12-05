import React, { useState, useEffect } from 'react';
import "../css/ServiceControls.css"


const ServiceControls = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() % 24;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const hourDeg = (hours / 24) * 360 + (minutes / 60) * (360 / 24);
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    return (
        <section className='ServiceControls-Section'>
             <div class="ServiceControls-container">
                <section class="ServiceControls-text">
                  <div className="Controls-card">
                  <p>we provide a customer <br /> service <br /> <span>24/7</span></p>
                  </div>
                </section>
            </div>

            <div className="clock">
                <div className='clock_hash'>
                    <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
                    <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
                    <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
                </div>
            </div>
        </section>
    );
};

export default ServiceControls;
