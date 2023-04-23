import { Avatar } from '@mui/material';
import './Post.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

function Post({profilePic, image, username, timestamp, message}) {
    
    return (
        <div className="post">
            <div className='post-top'>
                <Avatar src={profilePic} className="post-avatar"/>
                <div className='post-topInfo'>
                    <h3>{ username }</h3>
                    <p> timestamp.....</p>
                </div>
            </div>
            <div className='post-bottom'>
                <p>{message}</p>
            </div>

            <div className='post-image'>
                <img src={image} alt="" />
            </div>

            <div className='post-options'>
                <div className='post-option'>
                    <ThumbUpOutlinedIcon />
                    <h4>Like</h4>
                </div>

                <div className='post-option'>
                    <ChatBubbleOutlineOutlinedIcon />
                    <h4>Comment</h4>
                </div>


                <div className='post-option'>
                    <ReplySharpIcon />
                    <h4>Share</h4>
                </div>

                <div className='post-option postoption-last'>
                    <Avatar className="postoption-avatar"/>
                    <ArrowDropDownSharpIcon />
                </div>

            </div>
        </div>
    )
}

export default Post;