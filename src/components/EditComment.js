import { useState } from "react";
import { TextField, Button } from '@mui/material';
import Comments from "../models/Comments";

function EditComment(props){
    const [text, setText] = useState("")
    const [newComment, setNewComment] = useState("")
    
    const id = props.commentId

    function handleSubmit(event) {
		event.preventDefault();
		Comments.editComment({text}, id).then((data) => {
			console.log(data);
			// localStorage.setItem("uid", data.token)

			if (data.status === 200) {
                setNewComment(data.updatedComment.text)
			}
		})
	}

    function handleDelete(){
		Comments.deleteComment(id).then((data) => {
			if (data.status === 200) {
                setNewComment(data.updatedComment.text)
			}
		})
    }

    return(
        <>
        <form className="userEntryForm" onSubmit={handleSubmit}>
            <div className='form-group'>
                <TextField id="outlined-basic" 
                    label="Edit Comment" 
                    variant="outlined" 
                    onChange={(e) => setText(e.target.value)} 
                    value={text}
                    required
                />	
            </div>
            <Button type='submit' variant="outlined">Submit</Button>
			</form>

            <Button onClick={handleDelete} variant="outlined">Delete</Button>

            <p>{newComment}</p>
        </>
    )
}

export default EditComment