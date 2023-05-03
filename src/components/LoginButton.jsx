import React,{useContext} from 'react'
import {context} from "../context";
import {LoginWithGoogle} from "../auth";
const LoginButton = () => {
  const {setUser} = useContext(context);
  const login = async () => {
    const result = await LoginWithGoogle();
    setUser(result);
  }
  return (
    <button className="nav-button" onClick={login}>Login/Register</button>
  )
}

export default LoginButton;