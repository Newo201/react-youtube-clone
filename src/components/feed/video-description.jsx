import cameron from "../../assets/cameron.png"
import "./description.css"

export default function VideoDescription() {
  return (
    <>
    <div className = "publisher">
        <img src = {cameron}/>
        <div>
            <p>Mr Beast</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className = "description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe to Watch More Tutorials on Web Development</p>
        <hr/>
    </div>

    </>
  )
}