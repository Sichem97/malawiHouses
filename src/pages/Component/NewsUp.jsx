import React from 'react'
import '../css/NewsUp.css'
import { Link } from 'react-router-dom'
import CommentData from '../Data/CommentData'

export default function NewsUp() {
  return (
    <div>
       {/* Start Blog Area */}
		<section class="blog section" id="blog">
			<div class="container">
				<div class="row">
						<div class="section-title">
							<h2>Most Recent News.</h2>
                            <img src="assets/carry2.png" alt="logo_picture"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
				</div>
				<div class="blog_section_row">
                    <>
                    {CommentData.map((value)=>{
                        return(
                            <>
                             {/* Single Blog */}
                                <div class="single_news">
                                    <div class="news-head">
                                        <img src={value.Cover} alt={value.comment}/>
                                    </div>
                                    
                                    <div class="news_content">
                                        <div class="date">{value.date}</div>
                                        <h2><Link to='/Blog'>{value.title}</Link></h2>
                                        {value.Post.map((comment_value)=>{
                                            return(
                                                <p class="text">{comment_value.paragraph1}</p>
                                            )
                                        })}
                                    </div>
                                </div>
						 {/* End Single Blog */}
                            </>
                        )
                    })}
                    </>
				</div>
			</div>
		</section>
		 {/* End Blog Area */}
    </div>
  )
}
