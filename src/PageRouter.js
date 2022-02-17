import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Calculator from './Pages/Calculator';
import CalculatorDash from './Pages/CalculatorDash';
import CategoryDash from './Pages/CategoryDash';
import Landing from './Pages/Landing';
import Lesson from './Pages/Lesson';
import LessonDash from './Pages/LessonDash';
import Register from './Pages/Register';


function PageRouter(props){
    return(
        <>
            <Routes>
                <Route path="/calculator/:name" element={<Calculator />} />
                <Route path="/calculatordash" element={<CalculatorDash />} />

                <Route path="/categorydash" element={<CategoryDash />} />
                
                <Route path="/lesson/:id" element={<Lesson />} />
                <Route path="/lessondash" element={<LessonDash />} />

                <Route path="/landing" element={<Landing />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </>
    )
}

export default PageRouter