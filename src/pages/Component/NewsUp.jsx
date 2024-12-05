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
							<p id="color">Stay informed with our most recent news, where we bring you the latest updates, insights, and stories that matter most. From industry trends to important announcements, our news section is your go-to source for staying ahead and connected. We strive to keep you informed with accurate and timely information, ensuring you never miss out on what's happening in our world. Explore our recent articles and stay engaged with the topics that shape your interests and decisions.
</p>
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
