export default function ValueConverter(views) {
    
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

    return displayViews
}