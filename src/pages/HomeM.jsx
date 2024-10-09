import React from "react"
import "./css/Home.css"
import SliderHome from "./Slider"

const HomeM = () => {
  return (
    <>
      <section className='Slider'>
        <div className='container d_flex'>
          <SliderHome/>
        </div>
      </section>
    </>
  )
}
export default HomeM