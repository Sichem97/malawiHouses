import React from 'react'

export default function Comments() {
  return (
    <div class="container_row">
                        <div class="single-main">
                                {/* News Head  */}
                            <div class="news-head">
                                <img src="assets/Home_pub/service1.png" alt="#"/>
                            </div>
                                {/* News Title  */}
                                <h1 class="news-title"><a href="">More than 80 houses launched in january 2024</a></h1>

                                {/* Meta  */}
                            <div class="meta">
                                <div class="meta-left">
                                    <span class="author"><img src="assets/Home_pub/picture2.png" alt="#"/></span>

                                    <span class="date"><a href="#">Shekinah A.</a> <br /> <i class="fa fa-clock-o"></i>03 Feb 2024</span>
                                </div>

                                <div class="meta-right">
                                    <span class="comments"><a href="#All_comment"><i class="fa fa-comments"></i>05 Comments</a></span>
                                    <span class="views"><i class="fa fa-eye"></i>33K Views</span>
                                </div>
                            </div>
                                {/* News Text  */}
                            <div class="news-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod</p>

                                <div class="image-gallery">
                                    <div class="image-gallery_row">
                                        <div class="single-image">
                                            <img src="assets/Home_pub/service4.png" alt="#"/>
                                        </div>

                                        <div class="single-image">
                                            <img src="assets/Home_pub/service2.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>

                                <blockquote>
                                    <p>Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales</p>					
                                </blockquote>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse</p>
                                
                            </div>

                            <div class="blog_bottom">
                                    {/* Social Share  */}
                                <ul class="social-share">
                                    <li class="facebook"><a href=""><i class="fa-brands fa-facebook"></i><span>Facebook</span></a></li>
                                    <li class="twitter"><a href=""><i class="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
                                </ul>
                                    {/* Next Prev  */}
                                <ul class="prev-next">
                                    <li class="prev"><a href="">Prev</a></li>
                                    <li class="next"><a href="">Next</a></li>
                                </ul>
                                {/* / End Next Prev  */}
                            </div>
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
  )
}
