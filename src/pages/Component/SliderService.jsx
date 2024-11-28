
import React from "react";
import Slider from "react-slick";
import '../css/Service.css'
import ServiceData from "../Data/ServiceData"


const SliderServiceCard = ({name ,cover, title, text }) => (
  <div className="Service-card">
    <div className="Service-card-content">
      <img src={cover} alt={name} className="Service-image" />
      </div>
      <div className="Service">
      <h3>{title}</h3>
     <p className="Service-feedback">"{text}"</p>
     
    </div>
  </div>
);

const SliderService = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <section className="Service-section">
    
      <Slider {...sliderSettings}>
        {ServiceData.map((ServiceData, index) => (
          <SliderServiceCard key={index} {...ServiceData} />
        ))}
      </Slider>
    </section>
    
    
  );
};

export default SliderService;

