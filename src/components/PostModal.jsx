import React,{useRef,useContext,useState} from 'react'
import {context} from "../context";
import {addPostToDb,getPostsFromDb} from "../database";
import closeIcon from "../assets/close.png";
import {v4 as uuidv4} from "uuid";
import {uploadImage} from "../storage";
const PostModal = () => {
  const [showLoader, setShowLoder] = useState(false);
  const titleInpRef = useRef(null);
  const bodyInpRef = useRef(null);
  const imageInpRef = useRef(null);
  const {user,setPosts,setShowPostModal} = useContext(context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let postId = uuidv4();
    let image = imageInpRef.current.files[0];
    // console.log(image);
    let imageUrl = null
    if(!!image){
      setShowLoder(true);
      imageUrl = await uploadImage(image);
    }
    let post = {
        postId : postId,
        title: titleInpRef.current.value,
        body: bodyInpRef.current.value,
        userName: user.displayName,
        userPhotoURL: user.photoURL,
        upvote : 0,
        downvote : 0,
        timeStamp : new Date().toString(),
        imageUrl : imageUrl
      }
      let result = await addPostToDb(post);
      if(result){
        let posts = await getPostsFromDb()
        setPosts(posts);
      }else{
        console.log("retreiving post failed")
      }
    setShowLoder(false);
    setShowPostModal(false);

  }
  return (
    <div className={showLoader ? "post-modal disable-modal" : "post-modal" }>
        <img onClick={() => setShowPostModal(false)} src={closeIcon} alt="close" />
        <form onSubmit={handleSubmit} className="post-modal-form">
            <input ref={titleInpRef} required className="title-input" type="text" placeholder="TITLE"/>
            <textarea ref={bodyInpRef} required className="body-input" type="text" placeholder="BODY"/>
            <input ref={imageInpRef} accept="image/png, image/jpeg" type="file" />
            <input  type="submit"/>
        </form>
    </div>
  )
}

export default PostModal