import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import Video from "../models/Video";

function VideoIndex(){
    const [videos, setVideos] = useState([]);

  useEffect(function() {
      fetchVideos()
  }, []);

  function fetchVideos() {
		Video.videoIndex().then((data) => {
			console.log(data.videos);
      setVideos(data.videos)
		})
	}

  function generateVideoList(input) {
      console.log(input);
      return (
        <ul>
          {input.map(video => {
            return (<li>{video.instructor}</li>)
          })}
        </ul>
      )
  }

    return(
        <>
          {generateVideoList(videos)}
        </>
    )
}

export default VideoIndex;