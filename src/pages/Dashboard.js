import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

import TableView from '../components/TableView'

function Dashboard (props){
    return(
        <>
            <h1>Dashboard Page</h1>
            <TableView />
        </>
    )
}

export default Dashboard