import home_icon from "../../assets/home.png"
import gaming_icon from "../../assets/game_icon.png"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <nav className = "side-nav">
        <div className = "categories">
            <div className = "flex-div">
                <img className = "home-icon" src = {home_icon} />
                <p>Home</p>
            </div>
            <div className = "flex-div">
                <img className = "gaming-icon" src = {gaming_icon} />
                <p>Gaming</p>
            </div>
            <div className = "flex-div">
                <img className = "home-icon" src = {home_icon} />
                <p>Home</p>
            </div>
            <div className = "flex-div">
                <img className = "home-icon" src = {home_icon} />
                <p>Home</p>
            </div>
            <div className = "flex-div">
                <img className = "home-icon" src = {home_icon} />
                <p>Home</p>
            </div>
            <div className = "flex-div">
                <img className = "home-icon" src = {home_icon} />
                <p>Home</p>
            </div>
        </div>
        <div className = "Subscribers">

        </div>
    </nav>
  )
}
