import React from 'react';
import '../css/NewsPost.css'


function NewsPost({ post }) {
  return (
    <div className="single-main">
      <div className="news-head">
        <img src={post.Cover} alt="News Cover" />
      </div>
      <h1 className="news-title"><a href="#">{post.title}</a></h1>
      <div className="meta">
        <div className="meta-left">
          
          <span className="author">
            <img src={post.profile} alt="Author Profile" />
          </span>

          <span className="date"> 
            <a href="#">{post.name}</a> <br /> 
            <i className="fa fa-calendar"></i> {post.date}
          </span>

        </div>
        <div className="meta-right">
          <span className="comments"><a href="#All_comment"><i className="fa fa-comments"></i> 05 Comments</a></span>
        </div>
      </div>
      {post.Post.map((comment, index) => (
        <div className="news-text" key={index}>
          <p>{comment.paragraph1}</p>
          <p>{comment.paragraph2}</p>
          <div className="image-gallery">
            <div className="image-gallery_row">
              <div className="single-image"><img src={comment.img1} alt="Image 1" /></div>
              <div className="single-image"><img src={comment.img2} alt="Image 2" /></div>
            </div>
          </div>
          <p>{comment.paragraph3}</p>
          <blockquote><p><i>{comment.speech}</i></p></blockquote>
          <p>{comment.paragraph4}</p>
          <p>{comment.paragraph5}</p>
        </div>
      ))}
      <div className="blog-bottom">
        <ul className="social-share">
          <li className="facebook"><a href={post.Post[0].facebook}><i className="fa-brands fa-facebook"></i><span>Facebook</span></a></li>
          <li className="twitter"><a href={post.Post[0].twitter}><i className="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
        </ul>
      </div>
    </div>
  );
}

export default NewsPost;
