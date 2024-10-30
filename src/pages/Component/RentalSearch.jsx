import React from 'react'
import '../css/RentalSearch.css'

export default function RentalSearch() {
  return (
    <div className="Rental_search"> 
      <div className="Rental_title">
        <h1>Search by</h1>
      </div>

      <div className='Rental_option'>
        <div className=''>
         <span class="current">Category </span>
            <select name="" id="Category">
                <optgroup> 
                    <option value="Lilongwe">All</option>
                    <option value="Lilongwe">Building</option>
                    <option value="Blantyr">Business</option>
                    <option value="Dowa">Hotel & Motel</option>
                    <option value="Mutshindi">House</option>
                    <option value="Dowa">Office</option>
                    <option value="Mutshindi">Shop</option>
                </optgroup>
            </select>
        </div> 

        <div>
          <span class="current">District </span>
            <select name="" id="District">
              <optgroup> 
                <option value="Lilongwe">All</option>
                <option value="Lilongwe">Lilongwe</option>
                <option value="Blantyr">Blantyr</option>
                <option value="Dowa">Dowa</option>
                <option value="Mutshindi">Mutshindi</option>
              </optgroup>
            </select>
        </div>
        
        <div>
          <span class="current"> Area </span>
            <select name="" id="Area">
              <optgroup> 
                <option value="Lilongwe">All</option>
                <option value="Lilongwe">Lilongwe</option>
                <option value="Blantyr">Blantyr</option>
                <option value="Dowa">Dowa</option>
                <option value="Mutshindi">Mutshindi</option>
              </optgroup>
            </select>
        </div>
      </div>
    </div>
  )
}
