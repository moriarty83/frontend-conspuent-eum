import { useState } from "react";
import { TextField, Button } from '@mui/material';
import Comments from "../models/Comments";

function Comment(props){
    const [text, setText] = useState("")
    const [newComment, setNewComment] = useState("")
    
    const videoId = props.videoId

    function handleSubmit(event) {
		event.preventDefault();
		Comments.newComment({text, videoId}).then((data) => {
			console.log(data);
			// localStorage.setItem("uid", data.token)

			if (data.status === 201) {
                setNewComment(data.createdComment.text)
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

            <p>{newComment}</p>
        </>
    )
}

export default Comment