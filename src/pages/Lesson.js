import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
// import Comment from '../components/Comment';
import Reaction from '../components/Reaction';
import { useParams } from "react-router-dom";
import NewComment from '../components/NewComment';
import EditComment from '../components/EditComment';
import VideoIndex from '../components/VideoIndex';

function Lesson (props){
    const { id } = useParams()
    return(
        <>
            <h1>Lesson Page</h1>
            
            <Reaction videoId={ id } />
            {/* <Comment /> */}

            <NewComment videoId={id} />
            <EditComment commentId="620dcf27c24c986e66836f0c" />

            <VideoIndex />
        </>
    )
}

export default Lesson