import React, {useEffect,useContext} from 'react'
import {context} from "../context";
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import {loginPersistence} from "../auth"
const Home = () => {
  const {setUser} = useContext(context); 
  useEffect(()=> {
    const persistUserStatus = (user) => {
      if (user) {
        setUser(user);
        console.log("user persisted", user);
      } else {
        setUser(null);
      }
    }
    loginPersistence(persistUserStatus)
  },[])
  return (
    <div className="app">
        <Navbar/>
        <Posts/>
    </div>
  )
}

export default Home