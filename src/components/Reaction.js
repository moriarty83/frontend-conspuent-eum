import useParams from 'react-router-dom'
import { Button } from '@mui/material';
import Reactions from "../models/Reaction";

function Reaction(props){

  const videoId = props.videoId

    function handleSubmit(event) {
    // const params = useParams()
		event.preventDefault();
		Reactions.reaction({videoId}).then((data) => {
		
      console.log('COMPONENT', data);
			// localStorage.setItem("uid", data.token)

			// if (data.status === 201) {
			// 	console.log(data.status)
      //           // setNewReaction(data.createdReaction)
			// }
		})
	}

    return(
        <>
          <Button onClick={handleSubmit} variant="outlined">Like</Button>
          {/* <Button id="outlined-basic" 
              type="submit"
              variant="outlined" 
              onChange={(e) => setText(e.target.value)} 
              value={text}
              required
          >
          Like</Button> */}

            {/* <p>{newComment}</p> */}
        </>
    )
}

export default Reaction