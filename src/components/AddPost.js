import Add from "@mui/icons-material/Add";
import './AddPost.css'
import { Avatar } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function AddPost(params) {
    

    return (
        <div className="addpost">
            <div className="addpost-top">
                
                    <Avatar src="https://storage.googleapis.com/kaggle-avatars/images/1765403-gp.jpg"/>
                    <input type="text" placeholder="What's on your mind, Tripti?" />
                
            </div>
            

            <div className="addpost-bottom">
                

                <div className="addpost-option">
                    <VideocamIcon classname=" addpost-icons" style={{color: "red"}}/>
                    <h4>Live video</h4>    
                </div>

                <div className="addpost-option">
                    <PhotoLibraryIcon classname=" addpost-icons" style={{color: "green"}}/>
                    <h4>Photo/video</h4>    
                </div>

                <div className="addpost-option">
                    <EmojiEmotionsIcon classname=" addpost-icons" style={{color: "orange"}}/>
                    <h4>Feeling/activity</h4>    
                </div>

            </div>
        </div>
            
    )
}
export default AddPost;