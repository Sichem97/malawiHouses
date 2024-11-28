import React, { useState, useEffect } from 'react';
import CommentData from '../Data/CommentData';
import NewsPost from './NewsPost';
import CommentsSection from './CommentsSection';
import '../css/SingleNews.css'


function SingleNews() {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || CommentData;
    setPosts(storedPosts);
  }, []);

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.All_Comment.push(comment);
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleAddReply = (postId, commentId, reply) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.All_Comment = post.All_Comment.map(comment => {
          if (comment.id === commentId) {
            comment.replies.push(reply);
          }
          return comment;
        });
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleNext = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrevious = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  return (
    <div>
      <section className="news-single_section">
        <div className="news-single_container">
          <div className="news-single_row">
            <div className="container_row">
              {posts.length > 0 && (

                <>
                  <NewsPost post={posts[currentPostIndex]} />
                  
                    <div className="prev-next">
                    <button className="prev" onClick={handlePrevious}>Prev</button>
                    <button className="next" onClick={handleNext}>Next</button>
                    </div>

                  <CommentsSection
                    post={posts[currentPostIndex]}
                    handleAddComment={handleAddComment}
                    handleAddReply={handleAddReply}
                  />
                </>

              )}
            </div>
            <div className="main-sidebar">
              {/* Sidebar content */}
              <div className="single-widget category">
                <h3 className="title">Blog Categories</h3>
                <ul className="categor-list_voush">
                  <li><a href="#">Insurance</a></li>
                  <li><a href="#">Maintenance</a></li>
                  <li><a href="#">Negociation</a></li>
                  <li><a href="#">Managent</a></li>
                  <li><a href="#">Relocation</a></li>
                </ul>
              </div>
              <div className="single-widget recent-post">
                <h3 className="title">Recent post</h3>
                <div className="single-post">
                  <div className="image">
                    <img src="assets/Home_pub/service3.png" alt="Recent Post" />
                  </div>
                  <div className="content">
                    <h5><a href="#">We have announced our new beach houses.</a></h5>
                    <ul className="comment">
                      <li><i className="fa fa-calendar" aria-hidden="true"></i> Jan 11, 2024</li>
                      <li><i className="fa fa-commenting-o" aria-hidden="true"></i> 35</li>
                    </ul>
                  </div>
                </div>
                <div className="single-post">
                  <div className="image">
                    <img src="assets/Home_pub/service3.png" alt="Recent Post" />
                  </div>
                  <div className="content">
                    <h5><a href="#">Top 10 houses in trends.</a></h5>
                    <ul className="comment">
                      <li><i className="fa fa-calendar" aria-hidden="true"></i> Mar 05, 2024</li>
                      <li><i className="fa fa-commenting-o" aria-hidden="true"></i> 59</li>
                    </ul>
                  </div>
                </div>
                <div className="single-post">
                  <div className="image">
                    <img src="assets/Home_pub/service3.png" alt="Recent Post" />
                  </div>
                  <div className="content">
                    <h5><a href="#">House management solutions.</a></h5>
                    <ul className="comment">
                      <li><i className="fa fa-calendar" aria-hidden="true"></i> June 09, 2024</li>
                      <li><i className="fa fa-commenting-o" aria-hidden="true"></i> 44</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-widget side-tags">
                <h3 className="title">Tags</h3>
                <ul className="tag">
                  <li><a href="#">Building</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Hotel</a></li>
                  <li><a href="#">House</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleNews;
