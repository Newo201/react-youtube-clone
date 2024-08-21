import { useParams } from "react-router-dom"
import VideoRecs from "../../components/video-recs/video-recs"
import PlayVideo from "./play-video"
import "./video.css"


export default function Video() {

    const {videoId, categoryId} = useParams()

    return (
        <div className = "video-display-grid">
            <div>
            <PlayVideo videoId = {videoId} />
            </div>
            <div>
            <VideoRecs categoryId  = {categoryId}/>
            </div>
        </div>
    )
}