import React, { useState, useEffect } from 'react';
import '../css/CommentsSection.css'

function CommentsSection({ post, handleAddComment, handleAddReply }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments-${post.id}`)) || post.All_Comment;
    setComments(storedComments);
  }, [post]);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const comment = {
      id: comments.length + 1,
      author: event.target.firstName.value,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      comment: event.target.message.value,
      replies: []
    };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updatedComments));
    event.target.reset();
  };

  const handleSubmitReply = (event, commentId) => {
    event.preventDefault();
    const reply = {
      id: Date.now(),
      author: event.target.replyName.value,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      reply: event.target.replyMessage.value
    };
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        comment.replies = [...comment.replies, reply];
      }
      return comment;
    });
    setComments(updatedComments);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updatedComments));
    event.target.reset();
  };

  return (
    <>
      <div id="All_comment" className="blog-comments">
        <h2>All Comments</h2>
        <div className="comments-body">
          {comments.map(comment => (
            <div className="single-comments" key={comment.id}>
              <div className="mainBlog">
                <div className="body_blog">
                  <h4>{comment.author}</h4>
                  <div className="comment-meta">
                    <span className="meta"><i className="fa fa-calendar"></i> {comment.date}</span>
                    <span className="meta"><i class="fa-regular fa-clock"></i> {comment.time}</span>
                  </div>
                  <p>{comment.comment}</p>
                  <a href="#reply" onClick={() => document.getElementById(`reply-${comment.id}`).style.display = 'block'}><i className="fa fa-reply"></i> reply</a>

                  {comment.replies.map(reply => (
                    <div className="single-comments left" key={reply.id}>
                      <div className="body_blog">
                        <h4>{reply.author}</h4>
                        <div className="comment-meta">
                          <span className="meta"><i className="fa fa-calendar"></i> {reply.date}</span>
                          <span className="meta"><i class="fa-regular fa-clock"></i> {reply.time}</span>
                        </div>
                        <p>{reply.reply}</p>
                      </div>
                    </div>
                  ))}
                  
                  <form id={`reply-${comment.id}`} className="reply-form" style={{ display: 'none' }} onSubmit={(event) => handleSubmitReply(event, comment.id)}>
                    <div className="form-group">
                      <i className="fa fa-user"></i>
                      <input type="text" name="replyName" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-pencil"></i>
                      <textarea name="replyMessage" rows="3" placeholder="Your Reply" required></textarea>
                    </div>
                    <button type="submit" className="btn primary"><i className="fa fa-send"></i> Submit Reply</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="comments_form">
        <h2>Leave Comment</h2>
        <form className="form" onSubmit={handleSubmitComment}>
            <div className="form-group">
              <i className="fa fa-user"></i>
              <input type="text" name="firstName" placeholder="Your Name" required />
            </div>
            <div className="form-group message">
              <i className="fa fa-pencil"></i>
              <textarea name="message" rows="7" placeholder="Type Your Message Here" required></textarea>
            </div>
          <div className="form_group button">
            <button type="submit" className="btn primary"><i className="fa fa-send"></i> Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CommentsSection;
