import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import VideoIndex from '../components/VideoIndex'


function Dashboard (props){
    return(
        <>
            <h1>Dashboard</h1>
            <VideoIndex />
        </>
    )
}

export default Dashboard