import { Avatar } from "@mui/material"
import { selectUser } from "./features/userSlice"
import "./HeaderOption.css"
import { useSelector } from "react-redux"
/////////////////////////////////////////////
function HeaderOption({ avatar, Icon, title, onCLick }) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onCLick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
