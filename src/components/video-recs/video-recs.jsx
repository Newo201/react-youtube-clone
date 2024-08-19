import LargeVideo from "../feed/large-video"
import SmallVideo from "../feed/small-video"
import VideoDescription from "../feed/video-description"
import Comment from "../comments/comment"
import "./video-rec.css"
import CommentList from "../comments/comment-list"

export default function VideoRecs() {
  return (
    <div class = "video-display-grid">
    <div class = "video-display">
        <LargeVideo />
        <VideoDescription />
        <CommentList />
    </div>
    <div className = "display-rec flex-col">
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
        <SmallVideo />
    </div>
    </div>

    // <div className = "flex-div">
    //     <div className = "video-thumbnail">
    //         <img src = {video}/>
    //     </div>
    //     <div className = "video-description">
    //         <h3>7 Days Stranded in a Cave</h3>
    //         <h4>Mr Beast</h4>
    //         <p>26M Views &bull; 11 Hours Ago</p>
    //     </div>
    // </div>
  )
}