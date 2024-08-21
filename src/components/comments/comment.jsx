import dislike from "../../assets/dislike.png"
import like from "../../assets/like.png"
import cameron from "../../assets/cameron.png"
import "./comment.css"
import ValueConverter from "../../utils/value-converter"
import TimeConverter from "../../utils/time-converter"

export default function Comment({comment}) {

  console.log(comment)
  return (
    <div className = "comment">
        <img src = {comment?comment.snippet.authorProfileImageUrl:""}/>
        <div>
            <h3>
              {comment?comment.snippet.authorDisplayName:""}
              <span>{comment?TimeConverter(comment.snippet.updatedAt):""}</span>
            </h3>
            <p>{comment?comment.snippet.textOriginal:""}</p>
            <div className = "comment-action">
                <img src = {like} alt = "" />
                <span>{comment?ValueConverter(comment.snippet.likeCount):""}</span>
                <img src = {dislike} alt = "" />
            </div>
        </div>
    </div>
  )
}
