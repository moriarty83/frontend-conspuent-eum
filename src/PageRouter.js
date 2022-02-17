import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'

function PageRouter(props){
    return(
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default PageRouter