import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import Video from "../models/Video";
import ReactPlayer from 'react-player';

function VideoShow(props){

    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const [category, setCategory] = useState();
    const [instructor, setInstructor] = useState();
    const [sectionNumber, setSectionNumber] = useState();
    const [courseNumber, setCourseNumber] = useState();
    const [comments, setComments] = useState([]);

    const videoId = props.videoId;
    console.log(videoId);
  useEffect(function() {
      fetchVideo(videoId);
  }, []);

  function fetchVideo(id) {
		Video.videoShow(id).then((data) => {
			console.log(data);
      console.log(data.video);
      console.log(data.comments);
      // data contains video information and comments array
      setTitle(data.video.title);
      setUrl(data.video.vimeoUrl);
      setCategory(data.video.category);
      setInstructor(data.video.instructor);
      setSectionNumber(data.video.sectionNumber);
      setCourseNumber(data.video.courseNumber);
      setComments(data.comments)
		})
	}

  console.log(url);
  // function generateVideoList(input) {
  //     console.log(input);
  //     return (
  //       <ul>
  //         {input.map(video => {
  //           return <li>{video.instructor}</li>
  //         })}
  //       </ul>
  //     )
  // }

    return(
        <>
        <ReactPlayer controls={true} volume={0.5} muted={true} url={url} />
          <p>{title}</p>
          <p>{category}</p>
          <p>{instructor}</p>
        </>
    )
}

export default VideoShow;