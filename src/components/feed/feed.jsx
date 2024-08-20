import Video from "./feed-video";
import { API_KEY } from "../../Data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./feed.css"
import FeedVideo from "./feed-video";

export default function Feed({sidebar, currentCategory}) {

  const [data, setData] = useState([])

  const fetchData = async() => {
    const videoList_url =  'https://www.googleapis.com/youtube/v3/videos'
    const videoList_params = {
      'part': 'snippet, contentDetails, statistics', 'chart': 'mostPopular', 
      'maxResults': 50, 'videoCategoryId': currentCategory, 'key': API_KEY
    }
    // Return the data 
    const response = await axios.get(videoList_url, {params : videoList_params})
    const data = response.data
    console.log(data.items)
    setData(data.items)
  }

  useEffect(() => {
    fetchData()
  }, [currentCategory])

  return (
    <div className = {`video-grid ${sidebar?"":"large-container"}`}>
      {data.map((video, index) => {
        return (
          <Link to = {`video/${video.snippet.categoryId}/${video.id}`}>
            <FeedVideo key = {index} video_img = {video.snippet.thumbnails.medium.url} title = {video.snippet.title} 
            channel = {video.snippet.channelTitle} views = {video.statistics.viewCount} 
            published = {video.snippet.publishedAt}/>
          </Link>
        )
      })}
    </div>
  )
}
