import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import Video from "../models/Video";
import ReactPlayer from 'react-player';
import CommentTableView from "./CommentTable";
import TableView from "./TableView";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NewComment from '../components/NewComment'

function VideoShow(props){
    const [commentCount, setCommentCount] = useState()
    const [video, setVideo] = useState();


    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const [category, setCategory] = useState();
    const [instructor, setInstructor] = useState();
    const [sectionNumber, setSectionNumber] = useState();
    const [courseNumber, setCourseNumber] = useState();
    const [comments, setComments] = useState([]);

    const videoId = props.videoId;

  useEffect(function() {
      fetchVideo(videoId);
  }, [commentCount]);

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

      setCommentCount(data.comments.length)
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

  console.log(url);


    return(
        <>
        {/* <ReactPlayer controls={true} volume={0.5} url={url} />
          <p>{title}</p>
          <p>{category}</p>
          <p>{instructor}</p> */}

          <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <ReactPlayer width="320" controls={true} volume={0.5} url={url} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {instructor}
        </Typography>
      </CardContent>
      <CardActions>
        <NewComment videoId={videoId} commentCount={commentCount} setCommentCount={setCommentCount}/>
      </CardActions>
    </Card>

      <Typography gutterBottom variant="h5" component="div">
        Comments
        </Typography>
        <CommentTableView title="Comments" filter="responseTo" rowNames={[...new Set(comments.map(item => item["author.nickname"]))]} data={comments} />
        <TableView title="Comments" subtitle="Replies" filter="responseTo" rowNames={[...new Set(comments.map((item) => {return item["author.nickname"]}))]} data={comments} />
        </>
    )
}

export default VideoShow;
