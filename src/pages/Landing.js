import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom'
import { Button } from '@mui/material';

function Landing (props){
    
    const nav = useNavigate();

    function handleRegisterSubmit(event) {
        nav('/register');
        window.location.reload();
    }

    function handleLoginSubmit(event) {
        nav('/login');
        window.location.reload();
    }

    return(
        <>
            <h1>Welcome to Outta Pocket!</h1>

            <Button onClick={handleRegisterSubmit} variant="outlined">Register</Button>
            <Button onClick={handleLoginSubmit} variant="outlined">Login</Button>
        </>
    )
}

export default Landing;