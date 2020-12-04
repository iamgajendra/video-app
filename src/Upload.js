import { Button } from '@material-ui/core';
import React, { useState } from 'react'; 
import { auth, storage} from './firebase';
import Navigation from './Navigation';
import db from './firebase';
import './Upload.css';

const Upload = () => {

    const [caption, setCaption] = useState('');
    const [song, setSong] = useState('');
    const [file, setFile] = useState("");

    const post = () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            alert("file is uploaded")
            console.log(typeof fileRef)
        }).then(() => {
            fileRef.getDownloadURL().then(function (url) {
                db.collection("videos").doc().set({
                    url: url,
                    channel:auth.currentUser.displayName, 
                    description: caption, 
                    song: song , 
                    likes: 96, 
                    comments:34 ,
                    shares: 8
                })
                .then(function() {
                    alert("Post created Successfully!");
                })
                .catch(function(error) {
                    console.error("Error creating post: ", error);
                })
            })
        })

    }


    return (  
        <div className="upload">
            <div className='upload__page'>
                <div className="uploadPage__head">
                    <h1>Create Post</h1>
                </div>
                <div className="uploadPage__form">
                    <div className="file">
                        <input type="file" name="video" placeholder="Select Video" onChange={e => setFile(e.target.files[0])} required />
                    </div>
                    <textarea rows="4" cols="30" className="caption" name="caption" placeholder="caption" value={caption} onChange={e => setCaption(e.target.value)} required />
                    <input type="text" className="song" name="song" placeholder="Song Name" value={song} onChange={e => setSong(e.target.value)} required />
                    <Button variant="contained" color="secondary" onClick={post}>
                        Post
                    </Button>
                </div>
            </div>
            <div className="upload__navbar">
                <Navigation />
            </div>
        </div>
    );
}
 
export default Upload;