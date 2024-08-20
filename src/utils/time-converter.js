import moment from "moment";

export default function TimeConverter(published) {
    const today = new Date()
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

    return displayPublished
}