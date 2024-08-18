import "./video.css"
import video from "../../assets/thumbnail1.png"

export default function LargeVideo() {
    return (
      <div className = {`video large-video`}>
        <div className = {`video-thumbnail`}>
            <img src = {video}/>
        </div>
        <div className = 'video-description large-description'>
            <h3>7 Days Stranded in a Cave</h3>
            <p>26M Views &bull; 11 Hours Ago</p>
        </div>
        <hr/>
        <div className = "user-profile">
            <h4>Mr Beast</h4>
        </div>
      </div>
    )
  }