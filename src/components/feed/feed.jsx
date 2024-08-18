import Video from "./video";
import "./feed.css"

export default function Feed({sidebar}) {
  return (
    <div className = {`video-grid ${sidebar?"":"large-container"}`}>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
    </div>
  )
}
