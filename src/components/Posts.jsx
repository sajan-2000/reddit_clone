import React, {useContext,useEffect} from 'react'
import Post from "./Post";
import {getPostsFromDb} from "../database";
import {context} from "../context";
const Posts = () => {
  const {posts ,setPosts} = useContext(context);
  useEffect(() => {
    getPostsFromDb().then(posts => setPosts(posts))
  },[])
  return (
    <ul className="posts-container">
      {posts && (
        posts.map(post => <Post key={post.postId} post={post}/>)
      )}
    </ul>
  )
}

export default Posts