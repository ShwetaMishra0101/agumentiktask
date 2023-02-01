import React from 'react';
import styled from './Home.module.css'
import {Button} from '@chakra-ui/react'
import Allimage from './Allimage';
import Events from './Events';
import Downloads from './Downloads';
import Navbar from '../Component/Navbar';
import Tournament from './Tournament';
const Home = () => {
    return <div>
       
        
        <div className={styled.img_main_div}>
        <img className={styled.img} src='https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4v-f7s-xsW3XYmMpMgP48dXZUm1k0JWQv4brQefdhpt0' alt='img'/>
        <div className={styled.centered }>
            <h1 style={{fontSize:"30px"}}>Find your game tournament here!</h1>
        <p style={{fontSize:"30px"}}> Over 100 tournament & event waiting you to join in</p>

        <Button style={{backgroundColor:"teal"}}>Join Tournament</Button>


        </div>
    </div>
    <div style={{marginBottom:"4%"}}>
    <Allimage/>
    </div>
    <div style={{width:"70%",margin:"auto"}}>
    <Tournament/>
    </div>
    <div style={{marginBottom:"3%"}}>
    <Events/>
    </div>

    <div className={styled.about_div}>
        <div>
            <h1 className={styled.h1} >Talkam is the best place to find tournament, with the big price and great apponent. I start my profesional eSport carier with Talkam. Lets join!</h1>
            <p>Antimage (ONIC Esport) - Mobile Legend Player</p>
        </div>
        <div>
            <img className={styled.img12} src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt="" />
        </div>
    </div>
    <div style={{marginTop:"-20px"}}>
    < Downloads/>
    </div>
    
    </div>

}


export default Home;