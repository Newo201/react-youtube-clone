// Categories
import home_icon from "../../assets/home.png"
import gaming_icon from "../../assets/game_icon.png"
import automobile_icon from "../../assets/automobiles.png"
import entertainment_icon from "../../assets/entertainment.png"
import technology_icon from "../../assets/tech.png"
import music_icon from "../../assets/music.png"
import blogs_icon from "../../assets/blogs.png"
import sports_icon from "../../assets/sports.png"
import news_icon from "../../assets/news.png"
// Profiles
import cameron from "../../assets/cameron.png"
import jack from "../../assets/jack.png"
import "./sidebar.css"
import SingleCategory from "./single-category"
import Subscriber from "./subscriber"

// The ids match the corresponding category ids of the youtube data API
const categories = [
    {'name': 'Home', 'icon': home_icon, 'id': 0},
    {'name': 'Gaming', 'icon': gaming_icon, 'id': 20},
    {'name': 'Automobiles', 'icon': automobile_icon, 'id': 2},
    {'name': 'Entertainment', 'icon': entertainment_icon, 'id': 24},
    {'name': 'Technology', 'icon': technology_icon, 'id': 28},
    {'name': 'Music', 'icon': music_icon, 'id': 10},
    {'name': 'Sports', 'icon': sports_icon, 'id': 17},
    {'name': 'News', 'icon': news_icon, 'id': 25}
]

const subscribers = [
    {'name': 'PewDiePie', 'icon': jack},
    {'name': 'MrBeast', 'icon': cameron}
]

export default function Sidebar({sidebar, currentCategory, setCurrentCategory}) {
  return (
    <nav className = {`side-nav ${sidebar?"":"small-sidebar"}`}>
        <div className = "categories">
            {categories.map(cat => {
                return(<SingleCategory category = {cat.name} category_icon={cat.icon} id = {cat.id}
                setCurrentCategory = {setCurrentCategory}/>)
            })}
        </div>
        <hr></hr>
        <div className = "subscribers">
            <h3 className = "subscription-title">Subscribed</h3>
            {subscribers.map(user => {
                return(<Subscriber username = {user.name} profile_icon={user.icon}/>)
            })}
        </div>
    </nav>
  )
}
