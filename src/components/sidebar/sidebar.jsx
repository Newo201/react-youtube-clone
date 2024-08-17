import home_icon from "../../assets/home.png"
import gaming_icon from "../../assets/game_icon.png"
import automobile_icon from "../../assets/automobiles.png"
import entertainment_icon from "../../assets/entertainment.png"
import technology_icon from "../../assets/tech.png"
import music_icon from "../../assets/music.png"
import blogs_icon from "../../assets/blogs.png"
import news_icon from "../../assets/news.png"
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
                <img className = "automobile-icon" src = {automobile_icon} />
                <p>Automobiles</p>
            </div>
            <div className = "flex-div">
                <img className = "sports-icon" src = {sports_icon} />
                <p>Sports</p>
            </div>
            <div className = "flex-div">
                <img className = "entertainment-icon" src = {entertainment_icon} />
                <p>Entertainment</p>
            </div>
            <div className = "flex-div">
                <img className = "technology-icon" src = {technology_icon} />
                <p>Technology</p>
            </div>
            <div className = "flex-div">
                <img className = "music-icon" src = {music_icon} />
                <p>Music</p>
            </div>
            <div className = "flex-div">
                <img className = "blogs-icon" src = {blogs_icon} />
                <p>Blogs</p>
            </div>
            <div className = "flex-div">
                <img className = "news-icon" src = {news_icon} />
                <p>News</p>
            </div>
        </div>
        <div className = "Subscribers">

        </div>
    </nav>
  )
}
