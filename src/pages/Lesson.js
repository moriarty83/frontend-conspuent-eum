import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";

import NewComment from '../components/NewComment';
import EditComment from '../components/EditComment';

function Lesson (props){
    const { id } = useParams()
    return(
        <>
            <h1>Lesson Page</h1>
            <NewComment videoId={id} />
            <EditComment commentId="620ddc29b39017837642db0f" />
        </>
    )
}

export default Lesson