import { useState } from "react";
import { Button } from '@mui/material';
import Reactions from "../models/Reactions";

function Reaction(props){
    const [reaction, setReaction] = useState("")

    function handleSubmit(event) {
		event.preventDefault();
		Reactions.newReaction({text}).then((data) => {
			console.log(data);
			// localStorage.setItem("uid", data.token)

			if (data.status === 201) {
				console.log(data.status)
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