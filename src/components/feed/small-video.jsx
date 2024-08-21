import "./video.css"
import ValueConverter from "../../utils/value-converter"
import TimeConverter from "../../utils/time-converter"

export default function SmallVideo({video_img, title, channel, views, published}) {
    return (
      <div className = {`video small-video`}>
        <div>
            <img src = {video_img}/>
        </div>
        <div className = {'side-description'}>
            <h3>{title}</h3>
            <h4>{channel}</h4>
            <p>{ValueConverter(views)} &bull; {TimeConverter(published)}</p>
        </div>
      </div>
    )
  }