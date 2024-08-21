import "./video.css"
import dislike from "../../assets/dislike.png"
import like from "../../assets/like.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"

import TimeConverter from "../../utils/time-converter"
import ValueConverter from "../../utils/value-converter"

export default function LargeVideo({videoId, videoData}) {

    return (
      <div className = {`video large-video`}>
        <div className = {`video-thumbnail`}>
        <iframe 
        src= {`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </div>
        <h3>{videoData?videoData.snippet.title:"Title Here"}</h3>
        <div className = 'large-description'>
            <p>{videoData?ValueConverter(videoData.statistics.viewCount):0} Views &bull; 
               {videoData?TimeConverter(videoData.snippet.publishedAt):'11 Hours Ago'}</p>
            <div>
                <span><img src = {like}/> {videoData?ValueConverter(videoData.statistics.likeCount):0}</span>
                <span><img src = {dislike}/> </span>
                <span><img src = {share}/> Share</span>
                <span><img src = {save}/> Save</span>
            </div>
        </div>
        <hr/>
      </div>
    )
  }