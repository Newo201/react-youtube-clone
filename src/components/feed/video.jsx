// import video from "../../assets/thumbnail1.png"
import "./video.css"
import moment from "moment"

export default function Video({video_img, title, channel, views, published}) {

    let displayViews

    if (views >= 10**6) {
      displayViews = `${Math.floor(views/10**6)}M`
    }
    else if (views >= 10**3) {
      displayViews = `${Math.floor(views/10**3)}K`
    }
    else {
      displayViews = views
    }

    const publishedDate = new Date(published)
    const today = new Date()
    const publishedMoment = moment(publishedDate)
    const todayMoment = moment(today)

    const [month_diff, week_diff, day_diff, hour_diff] = [
      todayMoment.diff(published, 'months'),
      todayMoment.diff(published, 'weeks'), 
      todayMoment.diff(published, 'days'),
      todayMoment.diff(published, 'hours'),
    ]
  
    let displayPublished

    if (hour_diff < 24) {
      displayPublished = `${hour_diff} hours ago`
    }
    else if (day_diff < 7) {
      if (day_diff === 1) {
        displayPublished = `${day_diff} day ago`
      }
      else {
        displayPublished = `${day_diff} days ago`
      }
    }
    else if (week_diff < 4) {
      displayPublished = `${week_diff} weeks ago`
    }
    else {
      displayPublished = `${month_diff} months ago`
    }

    return (
      <div className = 'video'>
        <div className = 'video-thumbnail'>
            <img src = {video_img}/>
        </div>
        <div className = 'video-description'>
            <h3>{title}</h3>
            <h4>{channel}</h4>
            <p>{displayViews} Views &bull; {displayPublished}</p>
        </div>
      </div>
    )
  }