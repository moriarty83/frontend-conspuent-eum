import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing';
import Register from './Pages/Register';


function PageRouter(props){
    return(
        <>
            <h1>Router</h1>
            <Routes>
                
                <Route path="/landing" element={<Landing />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </>
    )
}

export default PageRouter