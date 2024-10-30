import React from 'react'
import RentalData from '../Data/RentalData'
import RentalSearch from './RentalSearch'

export default function Rental() {
  return (
    
    <>
      <>
      <RentalSearch/>
      </>

      <>
      <div className="product-grid_rental">
              {RentalData.map((value, index) => (
                <div key={index}>

                  <h1>
                      <div className="category-title_rental">
                          <h1>{value.category}</h1>
                      </div>
                  </h1>

                  <div className="product-list_rental">
                    {value.houses.map((house, houseIndex) => (

                      <div className="product-card_rental" key={houseIndex}>

                        <img className="product-image_rental" src={house.image} alt={house.name}/>

                          <div className="product-title_rental">{house.name}</div>

                              <div className="product-description_rental">
                                  <span>{house.description}</span> <br />
                                  <b>{house.location}</b>
                              </div>

                          <div className="product-cost_rental">MW {house.cost}</div>
                          
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
      </>
    </>
  )
}
