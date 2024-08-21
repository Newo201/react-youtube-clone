import SmallVideo from "../feed/small-video"
import "./video-rec.css"
import { useState, useEffect } from "react"
import { API_KEY } from "../../Data"
import axios from "axios"
import { Link } from "react-router-dom"

export default function VideoRecs({categoryId}) {

  const [data, setData] = useState([])

  const fetchData = async() => {
    const videoList_url =  'https://www.googleapis.com/youtube/v3/videos'
    const videoList_params = {
      'part': 'snippet, contentDetails, statistics', 'chart': 'mostPopular', 
      'maxResults': 20, 'videoCategoryId': categoryId, 'key': API_KEY
    }
    // Return the data 
    const response = await axios.get(videoList_url, {params : videoList_params})
    const data = response.data
    console.log(data.items)
    setData(data.items)
  }

  useEffect(() => {
    fetchData()
  }, [categoryId])

  return (
    <div className = "display-rec flex-col">
      {data?data.map((video, index) => {
        return <Link to = {`video/${video.snippet.categoryId}/${video.id}`}>
          <SmallVideo key = {index} video_img = {video.snippet.thumbnails.medium.url} title = {video.snippet.title} 
          channel = {video.snippet.channelTitle} views = {video.statistics.viewCount} 
          published = {video.snippet.publishedAt} />
        </Link>
      }):"Loading Videos"}
    </div>
  )
}