import dislike from "../../assets/dislike.png"
import like from "../../assets/like.png"
import cameron from "../../assets/cameron.png"
import "./comment.css"

export default function Comment() {
  return (
    <div className = "comment">
        <img src = {cameron}/>
        <div>
            <h3>Mr Beast <span>1 day ago</span></h3>
            <p>This is a random comment that I am making to test the functionality</p>
            <div className = "comment-action">
                <img src = {like} alt = "" />
                <span>244</span>
                <img src = {dislike} alt = "" />
            </div>
        </div>
    </div>
  )
}
