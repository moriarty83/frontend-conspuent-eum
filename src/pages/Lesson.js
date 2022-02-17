import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

import Comment from '../components/Comment';

function Lesson (props){
    return(
        <>
            <h1>Lesson Page</h1>
            <Comment />
        </>
    )
}

export default Lesson