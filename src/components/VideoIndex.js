import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import Video from "../models/Video";

import TableView from "./TableView";

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

        <>
          <TableView title="Lessons" filter="category" rowNames={[...new Set(videos.map(item => item.category))]} data={videos}/>
        </>

      )
  }

    return(
        <>
          {videos ? generateVideoList(videos) : <p>Loading Videos</p>}
        </>
    )
}

export default VideoIndex;