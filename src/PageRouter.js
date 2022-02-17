import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Calculator from './Pages/Calculator';
import CalculatorDash from './Pages/CalculatorDash';
import CategoryDash from './Pages/CategoryDash';
import Landing from './Pages/Landing';
import Lesson from './Pages/Lesson';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Login from './Pages/Login';


function PageRouter(props){
    return(
        <>
            <Routes>
                <Route path="/landing" element={<Landing />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/categorydash/:category" element={<CategoryDash />} />
                <Route path="/lesson/:id" element={<Lesson />} />

                <Route path="/calculator/:name" element={<Calculator />} />
                <Route path="/calculatordash" element={<CalculatorDash />} />
            </Routes>
        </>
    )
}

export default PageRouter