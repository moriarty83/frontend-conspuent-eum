import {Routes, Route} from 'react-router-dom'

import Landing from './pages/Landing'

import Login from './pages/Login'
import Register from './pages/Register'

import Dashboard from './pages/Dashboard'
import CategoryDash from './pages/CategoryDash'

import Lesson from './pages/Lesson'

import Calculator from './pages/Calculator'
import CalculatorDash from './pages/CalculatorDash'

function PageRouter(props){
    return(
        <>
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/category/:name" element={<CategoryDash />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/lessons/:id" element={<Lesson />} />

                <Route path="/calculatordash" element={<CalculatorDash />} />
                <Route path="/calculatordash/:name" element={<Calculator />} />

            </Routes>
        </>
    )
}

export default PageRouter