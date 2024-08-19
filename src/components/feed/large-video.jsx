import "./video.css"
import video from "../../assets/video.mp4"
import dislike from "../../assets/dislike.png"
import like from "../../assets/like.png"

export default function LargeVideo() {
    return (
      <div className = {`video large-video`}>
        <div className = {`video-thumbnail`}>
            <video src = {video} controls autoplay/>
        </div>
        <h3>7 Days Stranded in a Cave</h3>
        <div className = 'large-description'>
            <p>26M Views &bull; 11 Hours Ago</p>
            <div>
                <span><img src = {like}/> 125</span>
                <span><img src = {like}/> 125</span>
                <span><img src = {like}/> 125</span>
                <span><img src = {like}/> 125</span>
            </div>
        </div>
        <hr/>
      </div>
    )
  }