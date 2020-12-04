import React,{ useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, comments }) => {
    const [liked, setLiked] = useState(false);

    return (  
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon 
                    onClick={e => setLiked(false)}
                    fontSize="small" />
                ) : (
                    <FavoriteBorderIcon
                    onClick={e => setLiked(true)}
                    fontSize="small" />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="small" />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="small" />
                <p>{shares}</p>
            </div>
        </div>
    );
}
 
export default VideoSidebar;