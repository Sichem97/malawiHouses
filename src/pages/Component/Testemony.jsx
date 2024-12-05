import React from "react";
import Slider from "react-slick";
import "../css/Testimonials.css";
import testimonialsData from "../Data/testimonialsData";


const TestimonialCard = ({ name, location, image, feedback }) => (
  <div className="testimonial-card">
    <div className="testimonial-card-content">
      <img src={image} alt={name} className="testimonial-image" />
      </div>
      <div className="affiche">
      <h3 id="rt">{name}</h3>
      <p id="feedback">"{feedback}"</p>
    </div>
  </div>
);

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Slider {...sliderSettings}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;