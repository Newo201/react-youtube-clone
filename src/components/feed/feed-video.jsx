// import video from "../../assets/thumbnail1.png"
import "./video.css"
import TimeConverter from "../../utils/time-converter"
import ValueConverter from "../../utils/value-converter"

export default function FeedVideo({video_img, title, channel, views, published}) {

    return (
      <div className = 'video'>
        <div className = 'video-thumbnail'>
            <img src = {video_img}/>
        </div>
        <div className = 'video-description'>
            <h3>{title}</h3>
            <h4>{channel}</h4>
            <p>{ValueConverter(views)} Views &bull; {TimeConverter(published)}</p>
        </div>
      </div>
    )
  }