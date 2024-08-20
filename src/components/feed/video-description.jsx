import cameron from "../../assets/cameron.png"
import "./description.css"

export default function VideoDescription({videoData}) {
  return (
    <>
    <div className = "publisher">
        <img src = {cameron}/>
        <div>
            <p>{videoData?videoData.snippet.channelTitle: 'Title Here'}</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className = "description">
        <p>{videoData?videoData.snippet.description.slice(0, 250): 'Description Here'}</p>
        <hr/>
    </div>

    </>
  )
}