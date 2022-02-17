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
            <EditComment commentId="620dcf27c24c986e66836f0c" />
        </>
    )
}

export default Lesson