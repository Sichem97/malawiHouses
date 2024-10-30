import React from 'react'
import '../css/Fact.css'
import FactData from '../Data/FactData'

export default function Fact() {
  return (
    <div>
      	 {/* Start Fun-facts  */}
		
		<div id="fun-facts" class="fun-facts section">
			<div class="container">
				<div class="row">
				{ FactData.map((value,id)=>{
					return(
						<>
						 {/* Start Single Fun  */}
						 <div class="single-fun">
							{/* <i>{value.icon}</i> */}
							<div class="content">
								<span class="counter">{value.index}</span>
								<p>{value.title}</p>
							</div>

							<div class="content">
							</div>
							
						</div>
						 {/* End Single Fun  */}
						</>
					)
				})

				}
						
		 {/* End Single Fun  */}
				</div>
			</div>
		</div>
		{/* End Fun-facts  */}
    </div>
  )
}
