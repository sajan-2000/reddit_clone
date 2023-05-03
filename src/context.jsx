import React, {createContext,useState} from 'react'
const context = createContext();
const ContextProvider = ({children}) => {
  const [posts,setPosts] = useState(null);
  const [user,setUser] = useState(null);
  const [showPostModal,setShowPostModal] = useState(false);
  const value = {
    posts,
    setPosts,
    user,
    setUser,
    showPostModal,
    setShowPostModal
  }
  return (
    <context.Provider value={value}>
        {children}
    </context.Provider>
  )
}

export {ContextProvider, context};