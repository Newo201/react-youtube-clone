import Comment from "./comment";
import ValueConverter from "../../utils/value-converter";

export default function CommentList({videoData}) {
    return (
        <div className = "comment-list">
        <h3>{videoData?ValueConverter(videoData.statistics.commentCount): 0} Comments</h3>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        </div>
    )
}