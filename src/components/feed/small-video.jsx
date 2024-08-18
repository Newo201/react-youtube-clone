import "./video.css"
import video from "../../assets/thumbnail1.png"

export default function SmallVideo() {
    return (
      <div className = {`video small-video flex-div`}>
        <div className = {`video-thumbnail half-width`}>
            <img src = {video}/>
        </div>
        <div className = {'side-description'}>
            <h3>7 Days Stranded in a Cave</h3>
            <h4>Mr Beast</h4>
            <p>26M Views &bull; 11 Hours Ago</p>
        </div>
      </div>
    )
  }