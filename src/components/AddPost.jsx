import React, {useContext} from 'react';
import {context} from "../context";
import { createPortal } from 'react-dom';
import PostModal from "./PostModal";
const AddPost = () => {
  const {showPostModal,setShowPostModal} = useContext(context);
  return (
    <>
      <button onClick={() => {setShowPostModal(prev => !prev)}} className="nav-button">Add Post</button>
      {showPostModal && createPortal(<PostModal />,document.getElementById("portalRoot"))}
    </>
  )
}

export default AddPost