import React from 'react'
import '../css/Offert.css'
import { Link } from 'react-router-dom'
import ServiceData from '../Data/ServiceData'

export default function ServiceOffert() {
  return (
    <div>
        <>
          <section class="Feautes section">
        <div class="container">
          <div class="row">
              <div class="section-title">
                <h2>We Are Always Ready to Assist You</h2>
                <img src="assets/carry2.png" alt="logo_picture"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
          </div>
          <div class="row">
                {/* Start Single features  */}
                <div class="single-features">
                  <Link to='/RentPage'>
                  <div class="signle-icon">
                    <img src="assets/rent1.png" alt="rental_picture" />
                  </div>
                  <h3>Rent</h3>
                  </Link>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
                {/* End Single features  */}
                {/* Start Single features  */}
                <div class="single-features">
                  <Link to='/BuyPages'>
                  <div class="signle-icon">
                  <img src="assets/buy1.png" alt="buying_picture" />
                  </div>
                  <h3>Buy</h3>
                  </Link>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
                {/* End Single features  */}
                {/* Start Single features  */}
                <div class="single-features last">
                  <Link to='/SellPage'> 
                  <div class="signle-icon">
                  <img src="assets/sold1.png" alt="solling_picture" />
                  </div>
                  <h3>Sell</h3>
                  </Link>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
                {/* End Single features  */}
          </div>
        </div>
          </section>
          </>
          {/* --------------------------------------------------- */}
            <>
            
            </>
          {/* --------------------------------------------------- */}
          <>
          {/* professional section  */}

          <section class="professional_section layout_padding">
            <div class="container">
              <div class="row2">
                  <div class="img-box">
                    <img src="assets/Home_pub/Service5.png" alt=""/>
                  </div>
                  <div class="detail-box">
                    <h2>
                      We Provide <span>Professional</span> <br/>
                      House Services.
                    </h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti. Ratione sequi unde maxime fuga eveniet at rem totam vel, sint vero quas quo in quibusdam ad optio voluptatem magnam temporibus nesciunt. Veniam perferendis in aspernatur, vero quasi deleniti sint recusandae voluptatum tempore incidunt adipisci accusamus quidem, nam soluta maxime facere repellat, hic voluptates quaerat voluptatem obcaecati dolores temporibus. Ipsa illum fugiat ex itaque corporis, laborum blanditiis praesentium reiciendis corrupti amet culpa officia aliquam nisi magni sit, iusto beatae molestiae soluta neque non architecto labore maxime. Magnam vel quaerat nobis?
                    </p>
                    <ul className="services">
                      <li><a href="#">Insurance</a></li>
                      <li><a href="#">Maintenance</a></li>
                      <li><a href="#">Negociation</a></li>
                      <li><a href="#">Management</a></li>
                      <li><a href="#">Relocation</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>

          {/* end professional section  */}
          </>
        
        <>
        {/* Start service  */}
		<section class="services section">
			<div class="container1">
				<div class="row3">
						<div class="section-title">
							<h2>We Offer Different Services To <br /> Improve Your Happiness</h2>
							<img src="assets/carry2.png" alt="logo2_picture"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
				</div>

				<div class="row-col">
          <>
            {ServiceData.map((value,index)=>{
              return(
                <>
                {/* Start Single Service  */}
                <div class="single-service" id='service2'>
                  <a href="#service2">
                    <img src={value.cover} alt="" />
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </a>
                </div> 
                {/* End Single Service  */}
                </>
              )
            })}
          </>	 
				</div>
			</div>
		</section>
		{/* / End service  */}
        </>
    </div>
  )
}
