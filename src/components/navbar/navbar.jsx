import './navbar.css'
import menu_icon from "../../assets/menu.png"
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notifaction_icon from '../../assets/notification.png'
import profile_icon from '../../assets/user_profile.jpg'

export default function Navbar() {
  return (
    <nav className = 'flex-div'>
        {/* The left component of the navbar */}
        <div className = 'nav-left flex-div'>
            <img className = 'menu-icon' src = {menu_icon} alt = "" />
            <img className = 'logo' src  = {logo} alt = ""/>
        </div>
        {/* The middle component of the navbar which includes the search icon*/}
        <div className = "nav-middle flex-div">
          <div className = "search-box flex-div">
            <input type = "text" placeholder = "Search"/>
            <img className = "search-icon" src  = {search_icon} alt = ""/>
          </div>
         
        </div>
        {/* The right component of the navbar which includes all of the icons*/}
        <div className = "nav-right flex-div">
            <img className = 'upload_icon' src = {upload_icon} alt = "" />
            <img className = 'more-icon' src = {more_icon} alt = "" />
            <img className = 'notification-icon' src = {notifaction_icon} alt = "" />
            <img className = 'user-icon' src = {profile_icon} alt = "" />
        </div>
    </nav>
  )
}