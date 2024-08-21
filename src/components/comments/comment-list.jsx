import Comment from "./comment";
import ValueConverter from "../../utils/value-converter";
import { API_KEY } from "../../Data";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CommentList({videoData}) {

    const [commentData, setCommentData] = useState(null)

    const fetchCommentData = async() => {
        if (videoData) {
            const commentUrl = "https://www.googleapis.com/youtube/v3/commentThreads"
            const commentParams = {
                part: 'snippet', videoId: videoData.id, 
                maxResults: 20, key: API_KEY
            }
            const result = await axios.get(commentUrl, {params: commentParams})
            const data = result.data.items
            setCommentData(data)
        }
        else {
            setCommentData(null)
        }
    }

    useEffect(() => {
        fetchCommentData()
      }, [videoData])

    return (
        <div className = "comment-list">
        <h3>{videoData?ValueConverter(videoData.statistics.commentCount): 0} Comments</h3>
        {commentData?
        commentData.map((comment, index) => {
            return <Comment key = {index} comment = {comment.snippet.topLevelComment}/>
        })
        :""
        }
        </div>
    )
}