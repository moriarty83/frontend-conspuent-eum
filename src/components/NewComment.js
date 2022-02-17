import { useState } from "react";
import { TextField, Button } from '@mui/material';
import Comments from "../models/Comments";

function Comment(props){
    const [text, setText] = useState("")
    const [newComment, setNewComment] = useState("")
    
    const videoId = props.videoId
    console.log("vid id" + videoId)
    function handleSubmit(event) {
		event.preventDefault();
		Comments.newComment({text, videoId}).then((data) => {
			console.log("New comment:" + data);
			// localStorage.setItem("uid", data.token)

			if (data.status === 201) {
                setNewComment(data.createdComment.text)
                const newCount = props.commentCount + 1;
                props.setCommentCount(newCount)
                
			}
		})
	}

    return(
        <>
        <form className="userEntryForm" onSubmit={handleSubmit}>
            <div className='form-group'>
                <TextField id="outlined-basic" 
                    label="Comment" 
                    variant="outlined" 
                    onChange={(e) => setText(e.target.value)} 
                    value={text}
                    required
                />	
            </div>
            <Button type='submit' variant="outlined">Leave Comment</Button>
			</form>
        </>
    )
}

export default Comment