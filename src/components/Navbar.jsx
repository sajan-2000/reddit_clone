import React, {useContext} from 'react'
import ProfileNavItem from "./ProfileNavItem";
import LoginButton from "./LoginButton";
import AddPost from "./AddPost";
import LogoutButton from "./LogoutButton";
import redditLogo from "../assets/reddit.png";
import {context} from "../context";
const Navbar = () => {
  const {user} = useContext(context);
  return (
    <nav>
        <div id="logo">
          <img src={redditLogo} alt="reddit" />
          <p>Reddit</p>
        </div>
        <div className="nav-items">
          {
            user ? 
            (
              <>
                <ProfileNavItem/>
                <AddPost/>
                <LogoutButton/>
              </>
            ):
            (
              <LoginButton/>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar