import React,{useContext} from 'react'
import upvoteIcon from "../assets/thumb-up.png";
import downvoteIcon from "../assets/dislike.png";
import {context} from "../context";
import {upvotePost,downvotePost} from "../database";
const Post = ({post}) => {
  const {setPosts,user} = useContext(context);
  const {
    postId,
    title,
    body,
    userName,
    userPhotoURL,
    upvote,
    downvote,
    timeStamp,
    imageUrl
  } = post
  
  const likePost = async () => {
    if(!user) return;
    let result = await upvotePost(postId,upvote);
    if(result){
      setPosts(result);
    }else{
      // upvote failed
    }
  }
  const dislikePost = async () => {
    if(!user) return;
    let result = await downvotePost(postId,downvote)
    if(result){
      setPosts(result);
    }else{
      // downvote failed
    }

  }
  return (
    <div className="post-card">
      <div className="user-details">
        <img src={userPhotoURL} alt={userName} />
        <p className="user-name">{userName}</p>
        <p className="time-string">{new Date(timeStamp).toDateString()}</p>
      </div>
      <section className="post-body">
        <h2>{title}</h2>
        {imageUrl && (
          <img className="post-image" src={imageUrl} alt="post img"/>
        )}
        <p>{body}</p>
      </section>
      <section className="post-footer">
        <p>{upvote}</p>
        <button onClick={likePost} className="upvote-button">
          <img src={upvoteIcon} alt="upvote" />
          <p>upvote</p>
        </button>
        <p>{downvote}</p>
        <button onClick={dislikePost} className="downvote-button">
          <img src={downvoteIcon} alt="downvote" />
          <p>downvote</p>
        </button>
      </section>
    </div>
  )
}

export default Post