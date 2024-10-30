import React from 'react'
import CommentData from '../Data/CommentData'

export default function SingleNews() {
  return (
    <div>
       {/* Single News  */}
		<section class="news-single_section">
			<div class="news-single_container">
				<div class="news-single_row">
                    <div class="container_row">
                        {CommentData.map((value, Index)=>{
                            return(
                            <>
                                <div class="single-main">
                                        {/* News Head  */}
                                    <div class="news-head">
                                        <img src={value.Cover} alt="#"/>
                                    </div>
                                        {/* News Title  */}
                                        <h1 class="news-title"><a href="">{value.title}</a></h1>

                                        {/* Meta  */}
                                    <div class="meta">
                                        <div class="meta-left">
                                            <span class="author"><img src={value.profile} alt="#"/></span>

                                            <span class="date"><a href="#">{value.name}</a> <br /> <i class="fa fa-clock-o"></i>{value.date}</span>
                                        </div>

                                        <div class="meta-right">
                                            <span class="comments"><a href="#All_comment"><i class="fa fa-comments"></i>05 Comments</a></span>
                                        </div>
                                    </div>

                                        {/* News Text  */}
                                        {value.Post.map((Comment_value)=>{
                                            return(
                                                <>
                                                <div class="news-text">
                                        <p>{Comment_value.paragraph1}</p>
                                        <p>{Comment_value.paragraph2}</p>

                                        <div class="image-gallery">
                                            <div class="image-gallery_row">
                                                <div class="single-image">
                                                    <img src={Comment_value.img1} alt="#"/>
                                                </div>

                                                <div class="single-image">
                                                    <img src={Comment_value.img2} alt="#"/>
                                                </div>
                                            </div>
                                        </div>

                                        <p>{Comment_value.paragraph3}</p>

                                        <blockquote>
                                            <p><i>{Comment_value.speech}</i></p>					
                                        </blockquote>

                                        <p>{Comment_value.paragraph4}</p>

                                        <p>{Comment_value.paragraph5}</p>
                                        
                                    </div>

                                    <div class="blog-bottom">
                                            {/* Social Share  */}
                                        <ul class="social-share">
                                            <li class="facebook"><a href={Comment_value.facebook}><i class="fa-brands fa-facebook"></i><span>Facebook</span></a></li>
                                            <li class="twitter"><a href={Comment_value.twitter}><i class="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
                                        </ul>
                                        
                                            {/* Next Prev  */}
                                        <ul class="prev-next">
                                            <li class="prev"><button>Prev</button></li>
                                            <li class="next"><button>Next</button></li>
                                        </ul>
                                        {/* / End Next Prev  */}
                                    </div>
                                                </>
                                            )
                                        })}  
                                </div>
                                        
                                <div id='All_comment' class="blog-comments">
                                    <h2>All Comments</h2>
                                    <div class="comments-body">
                                            {/* Single Comments  */}
                                        <div class="single-comments">
                                            <div class="main">
                                                <div class="head">
                                                    {/* <img src="img/author1.jpg" alt="#"/> */}
                                                </div>
                                                <div class="body">
                                                    <h4>Shekinah A.</h4>
                                                    <div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2024</span><span class="meta"><i class="fa fa-clock-o"></i>03:38 AM</span></div>
                                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
                                                    <a href="#"><i class="fa fa-reply"></i>replay</a>
                                                </div>
                                            </div>
                                        </div>		
                                            {/* / End Single Comments  */}

                                            {/* Single Comments  */}
                                        <div class="single-comments left">
                                            <div class="main">
                                                <div class="body">
                                                    <h4>Yotcheb J</h4>
                                                    <div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2024</span><span class="meta"><i class="fa fa-clock-o"></i>03:40 AM</span></div>
                                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
                                                    <a href="#"><i class="fa fa-reply"></i>replay</a>
                                                </div>
                                            </div>
                                        </div>		
                                        {/* / End Single Comments  */}

                                            {/* Single Comments  */}
                                        <div class="single-comments">
                                            <div class="main">
                                                <div class="body">
                                                    <h4>Priscilla H</h4>
                                                    <div class="comment-meta"><span class="meta"><i class="fa fa-calendar"></i>March 05, 2024</span><span class="meta"><i class="fa fa-clock-o"></i>05:27 AM</span></div>
                                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
                                                    <a href="#"><i class="fa fa-reply"></i>replay</a>
                                                </div>
                                            </div>
                                        </div>		
                                        {/* / End Single Comments */}
                                    </div>
                                </div>
                            </>
                                    )})}

                        <div class="comments-form">
                            <h2>Leave Comments</h2>
                                {/* Contact Form  */}
                            <form class="form">
                                <div class="form_comment">
                                    <div class="form-group">
                                        <i class="fa fa-user"></i>
                                        <input type="text" name="first-name" placeholder="First name" required="required"/>
                                    </div>
                                    <div class="form-group">
                                        <i class="fa fa-envelope"></i>
                                        <input type="text" name="last-name" placeholder="Last name" required="required"/>
                                    </div>
                                    <div class="form-group">
                                        <i class="fa fa-envelope"></i>
                                        <input type="email" name="email" placeholder="Your Email" required="required"/>
                                    </div>
                                </div>

                                <div className="form_comment">
                                <div class="form-group message">
                                        <i class="fa fa-pencil"></i>
                                        <textarea name="message" rows="7" placeholder="Type Your Message Here" ></textarea>
                                    </div>
                                </div>
                                
                                <div class="form_group button">	
                                    <button type="submit" class="btn primary"><i class="fa fa-send"></i>Submit Comment</button>
                                </div>
                            </form>
                            {/* / End Contact Form  */}
                        </div>
                    </div>

                    <div class="main-sidebar">
                            {/* Single Widget  */}
                        <div class="single-widget search">
                            <div class="form">
                                <input type="email" placeholder="Search Here..."/>
                                <a class="button" href="#"><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                            {/* / End Single Widget  */}

                            {/* Single Widget  */}
                        <div class="single-widget category">
                            <h3 class="title">Blog Categories</h3>
                            <ul class="categor-list_voush">
                                <li><a href="#">Insurance</a></li>
                                <li><a href="#">Maintenance</a></li>
                                <li><a href="#">Negociation</a></li>
                                <li><a href="#">Managent</a></li>
                                <li><a href="#">Relocation</a></li>
                            </ul>
                        </div>
                            {/* / End Single Widget  */}


                            {/* Single Widget  */}
                        <div class="single-widget recent-post">
                            <h3 class="title">Recent post</h3>
                                {/* Single Post  */}
                            <div class="single-post">
                                <div class="image">
                                    <img src="assets/Home_pub/service3.png" alt="#"/>
                                </div>
                                <div class="content">
                                    <h5><a href="#">We have annnocuced our new beach houses.</a></h5>
                                    <ul class="comment">
                                        <li><i class="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2024</li>
                                        <li><i class="fa fa-commenting-o" aria-hidden="true"></i>35</li>
                                    </ul>
                                </div>
                            </div>
                                {/* End Single Post  */}

                                {/* Single Post  */}
                            <div class="single-post">
                                <div class="image">
                                    <img src="assets/Home_pub/service3.png" alt="#"/>
                                </div>
                                <div class="content">
                                    <h5><a href="#">Top 10 of houses in trends.</a></h5>
                                    <ul class="comment">
                                        <li><i class="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2024</li>
                                        <li><i class="fa fa-commenting-o" aria-hidden="true"></i>59</li>
                                    </ul>
                                </div>
                            </div>
                                {/* End Single Post  */}

                                {/* Single Post  */}
                            <div class="single-post">
                                <div class="image">
                                    <img src="assets/Home_pub/service3.png" alt="#"/>
                                </div>
                                <div class="content">
                                    <h5><a href="#">House management solutions.</a></h5>
                                    <ul class="comment">
                                        <li><i class="fa fa-calendar" aria-hidden="true"></i>June 09, 2024</li>
                                        <li><i class="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                                    </ul>
                                </div>
                            </div>
                                {/* End Single Post  */}
                        </div>
                            {/* / End Single Widget  */}


                            {/* Single Widget  */}
                        <div class="single-widget side-tags">
                            <h3 class="title">Tags</h3>
                            <ul class="tag">
                                <li><a href="">Building</a></li>
                                <li><a href="">Business</a></li>
                                <li><a href="">Hotel</a></li>
                                <li><a href="">House</a></li>
                                <li><a href="">Office</a></li>
                                <li><a href="">Shop</a></li>
                            </ul>
                        </div>
                            {/* / End Single Widget  */}
                    </div>
				</div>
			</div>
		</section>
		{/* / End Single News  */}
    </div>
  )
}
