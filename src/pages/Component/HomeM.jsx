import React from "react"
import SliderHome from "./Slider"
import "../css/Home.css"
import ServiceOffert from "./ServiceOffert"
import Fact from "./Fact"
import NewsUp from "./NewsUp"

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
        <Fact/>
        </>

        <>
        <NewsUp/>
        </>
      </section>
    </div>
  )
}
export default HomeM