import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Comment from '../components/Comment';
import Reaction from '../components/Reaction';
import { useParams } from "react-router-dom";
import NewComment from '../components/NewComment';
import EditComment from '../components/EditComment';

function Lesson (props){
    const { id } = useParams()
    return(
        <>
            <h1>Lesson Page</h1>
            
             // Jared section
            <Reaction videoId={ id } />
            <Comment />
            // End Jared section
      
            // dev section
            <NewComment videoId={id} />
<<<<<<< HEAD
            <EditComment commentId="620ddc29b39017837642db0f" />
=======
            <EditComment commentId="620dcf27c24c986e66836f0c" />
            // end dev section
>>>>>>> origin/dev
        </>
    )
}

export default Lesson