import cameron from "../../assets/cameron.png"
import "./description.css"
import axios from "axios"
import { API_KEY } from "../../Data"
import { useState, useEffect } from "react"
import ValueConverter from "../../utils/value-converter"

export default function VideoDescription({videoData}) {

  const [channelData, setChannelData] = useState(null)

  const fetchChannelData = async() => {
    const channelUrl = "https://www.googleapis.com/youtube/v3/channels"
    const channelParams = {part: 'snippet, statistics', id: videoData?videoData.snippet.channelId:0, key: API_KEY}
    const result = await axios.get(channelUrl, {params: channelParams})
    const data = result.data.items?result.data.items[0]:null
    setChannelData(data)
  }

  useEffect(() => {
    fetchChannelData()
  }, [videoData])

  return (
    <>
    <div className = "publisher">
        <img src = {channelData?channelData.snippet.thumbnails.default.url:""}/>
        <div>
            <p>{videoData?videoData.snippet.channelTitle: 'Title Here'}</p>
            <span>{channelData?ValueConverter(channelData.statistics.subscriberCount): 0} Subscribers</span>
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