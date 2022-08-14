import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GroupIcon from "@mui/icons-material/Group"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"

import HeaderOption from "./HeaderOption"
import { logout, selectUser } from "./features/userSlice"
import { auth } from "./Firebase"
import { useSelector, useDispatch } from "react-redux"

//
function Header() {
  // const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt=""
          style={{ justifyContent: "center" }}
        />
        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* right */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onCLick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
