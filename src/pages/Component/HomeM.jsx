import React from "react"
import SliderHome from "./Slider"
import "../css/Home.css"
import ServiceOffert from "./ServiceOffert"
import Fact from "./Fact"
import NewsUp from "./NewsUp"
import SliderService from "./SliderService"
import Testemony from '../Component/Testemony'
import ServiceControls from './ServiceControls'



const HomeM = () => {
  return (
    <div className="Special_Animation"> 
      <section>
        
		    < >
        	<SliderHome/>
        </>

        <>
          <ServiceOffert/>
        </> 

        <>
        <SliderService/>
        </>

        <>
        <Fact/>
        </>

        <>
        <NewsUp/>
        </>

        <>
        <ServiceControls/>
        </>
        
        <>
        <Testemony/>
        </>
      </section>
    </div>
  )
}
export default HomeM