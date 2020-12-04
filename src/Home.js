import React,{ useState,useEffect } from 'react';
import './Home.css';
import Video from './Video';
import db from './firebase';
import Navigation from './Navigation';


const Home = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        db.collection("videos").onSnapshot(snapshot => (
        setVideos(snapshot.docs.map(doc => doc.data()))
        ));

    },[])

    return (  
        <div className="home">
            <div className="home__videos">

                {videos.map(({url, channel, description, song , likes, comments, shares}) => (
                <Video
                    url={url}
                    channel={channel}
                    description={description}
                    song={song}
                    likes={likes}
                    comments={comments}
                    shares={shares} 
                />
                )
                )}
            </div>
            <div className="home__navigation">
                <Navigation />
            </div>
        </div>
    );
}
 
export default Home;