import React from "react"
import Sdata from "../Data/Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../css/Home.css'

const SlideCard = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "0px" }}>{dots}</ul>
    // },
  }
  return (
    <>
      
        <header class="hero">
        <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
            {/* header */}
            <div class="hero-container">
                <section class="hero-text">
                  <div className="hero-text-grid2">
                    <p>We Provide <span>House</span> Services <br /> That You Can <span>Trust</span>!</p>
                  </div>

                  <div className="hero-text-grid">
                    {/* <img src="assets/Home_pub/picture1.png" alt="" /> */}
                  </div>
                </section>
            </div>
            
            </>
          )
        })}
      </Slider>
        </header>
    </>
  )
}

export default SlideCard
