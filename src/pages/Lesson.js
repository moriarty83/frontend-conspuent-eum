import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Comment from '../components/Comment';
import Reaction from '../components/Reaction';

function Lesson (props){
    const { id } = useParams()
    return(
        <>
            <h1>Lesson Page</h1>
            <Reaction videoId={ id } />
            <Comment />
        </>
    )
}

export default Lesson