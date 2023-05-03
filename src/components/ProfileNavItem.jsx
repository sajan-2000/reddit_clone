import React, {useContext} from 'react';
import {context} from "../context";
const ProfileNavItem = () => {
  const {user} = useContext(context);
  const {
    photoURL,
    email,
    displayName
  } = user;
  return (
    <div className="nav-profile">
      <img src={photoURL} alt={displayName} />
      <p>{displayName}</p>
    </div>
  )
}

export default ProfileNavItem