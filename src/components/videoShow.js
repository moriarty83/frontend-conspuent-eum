import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import Video from "../models/Video";
import ReactPlayer from 'react-player';
import CommentTableView from "./CommentTable";

function VideoShow(props){
    const [video, setVideo] = useState();

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
      setVideo(data.video)
      setTitle(data.video.title);
      setUrl(data.video.vimeoUrl);
      setCategory(data.video.category);
      setInstructor(data.video.instructor);
      setSectionNumber(data.video.sectionNumber);
      setCourseNumber(data.video.courseNumber);

      setComments(flattenComments(data.comments))
		})
	}

  const flattenComments = (comments) =>{
    let newComments = []
    for(let comment of comments){
      console.log(comment)
      newComments.push(flattenObj(comment))

    }
    return newComments
  }

  const flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j];
            }
        }
        else {
            result[i] = ob[i];
        }
    }
    return result;
};
 

  
  // const flattened = flattenObj(obj)

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
          <CommentTableView title="Comments" filter="responseTo" rowNames={[...new Set(comments.map(item => item["author.nickname"]))]} data={comments}/>

          
        </>
    )
}

export default VideoShow;