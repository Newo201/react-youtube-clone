import LargeVideo from "../../components/feed/large-video"
import VideoDescription from "../../components/feed/video-description"
import CommentList from "../../components/comments/comment-list"
import { useState, useEffect } from "react"
import { API_KEY } from "../../Data"
import axios from "axios"

export default function PlayVideo({videoId}) {

    const [apiData, setApiData] = useState(null)

    const fetchData = async() => {
      const videoList_url =  'https://www.googleapis.com/youtube/v3/videos'
      const videoList_params = {
        'part': 'snippet, contentDetails, statistics', 
        'id': videoId, 'key': API_KEY
      }
      // Return the data 
      const response = await axios.get(videoList_url, {params : videoList_params})
      const data = response.data
      setApiData(data.items[0])
    }

    useEffect(() => {
      fetchData()
    }, [])


    return (
    <div className = "video-display">
        <LargeVideo videoId = {videoId} videoData = {apiData}/>
        <VideoDescription videoData = {apiData}/>
        <CommentList videoData = {apiData}/>
    </div>
    )
}