

import styled from './Styles/AllRouts.module.css';
import React from 'react';

import {Routes,Route} from 'react-router-dom'
import Navbar from '../Component/Navbar';

import Downloads from './Downloads';
import Events from './Events';
import Home from './Home';
import Login from './Login_Signup/Login';
import SignUp from './Login_Signup/SignUp';
import Tournament from './Tournament';


const AllRout = () => {
    return <div>
       <Navbar />
    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/' element={<SignUp />} />
    </Routes>

    <div className={styled.allR_main_div}>
        
    
        <div>
            

            <Routes>
                <Route path='/home' element={ <Home/>} />
                
               
                <Route path='/event' element={<Events/>}/>
                
             <Route path='/tourn' element={<Tournament/>}/>
             <Route path='/download' element={<Downloads/>}/>
                
            </Routes>


        </div>
        </div>
    </div>;
}



export default AllRout;