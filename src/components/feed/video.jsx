import video from "../../assets/thumbnail1.png"
import "./video.css"

export default function Video() {
    return (
      <div className = "video">
        <div className = "video-thumbnail">
            <img src = {video}/>
        </div>
        <div className = "video-description">
            <h3>7 Days Stranded in a Cave</h3>
            <h4>Mr Beast</h4>
            <p>26M Views &bull; 11 Hours Ago</p>
        </div>
      </div>
    )
  }