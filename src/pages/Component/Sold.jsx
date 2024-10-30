import React from 'react'
import SoldDada from '../Data/SoldData'
import SoldSearch from './SoldSearch'


export default function Sold() {
  return (
    <>
    <SoldSearch/>
    <>
    <div className="product-grid_sold">
            {SoldDada.map((value, index) => (
              <div key={index}>

                <h1>
                    <div className="category-title_sold">
                        <h1>{value.category}</h1>
                    </div>
                </h1>

                <div className="product-list_sold">
                  {value.houses.map((house, houseIndex) => (

                    <div className="product-card_sold" key={houseIndex}>

                      <img className="product-image_sold" src={house.image} alt={house.name}/>

                        <div className="product-title_sold">{house.name}</div>

                            <div className="product-description_sold">
                                <span>{house.description}</span> <br />
                                <b>{house.location}</b>
                            </div>

                        <div className="product-cost_sold">MW {house.cost}</div>
                        
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
