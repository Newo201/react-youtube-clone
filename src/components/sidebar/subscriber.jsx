export default function Subscriber({username, profile_icon}) {
    return (
        <div className = "flex-div">
            <img className = "profile-icon" src = {profile_icon} />
            <p>{username}</p>
        </div>
    )
}