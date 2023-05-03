import React, {useContext} from 'react'
import {signOutUser} from "../auth";
import {context} from "../context";
const LogoutButton = () => {
  const {setUser} = useContext(context)
  const logout = async () => {
    const result = await signOutUser();
    setUser(null);
  }
  return (
    <button onClick={logout} className="nav-button">Logout</button>
  )
}

export default LogoutButton