import React from "react";
import Slider from "react-slick";
import '../css/NewsUp.css'
import NewsUpData from '../Data/NewsUpData'


const NewsUpCard = ({ name, date, cover, profile , title }) => (
  <div className="NewsUp-card">
    <div className="NewsUp-card-content">
      <img src={cover} alt={name} className="NewsUp-image" />
      </div>
      <div className="NewsUp">
      <h3>{title}</h3>
     <a className="a" href="/Blog">"{date}"</a>
      <p className="NewsUp-feedback">"{profile}"</p>
    </div>
  </div>
);

const NewsUp = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <section className="NewsUp-section">
      <h2>Most Recent News.</h2>
      <div class="section-title">
                            <img src="assets/carry2.png" alt="logo_picture"/>
							<p className="color">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
 						</div>
      <Slider {...sliderSettings}>
        {NewsUpData.map((NewsUpData, index) => (
          <NewsUpCard key={index} {...NewsUpData} />
        ))}
      </Slider>
    </section>
    
    
  );
};

export default NewsUp;
