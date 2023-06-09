import './Story.css';
import { Avatar } from "@mui/material";


function Story({image, profileSrc, title}){

    return (
        <div className="story" style={{ backgroundImage: `url(${image})`}}>
            <Avatar className= " store-avatar" src={profileSrc} />    
            <h4>{title}</h4>
        </div>
    )
}

export default Story;