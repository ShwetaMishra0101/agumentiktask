

import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return <div style={{display:"flex",justifyContent:"space-around",height:"60px",backgroundColor:"black",color:"white", width:"70%",margin:'auto'}}>

<div><Link to="/home" >tarkam</Link></div>
<div style={{display:"flex",justifyContent:"space-between",gap:"40px"}}>
<Link to='/tourn'>Tournament</Link>
<Link to="/event">Event</Link>
<Link to="/download" >Download</Link>
<Link to="/login" >Login</Link>
<Link to="/" >Signup </Link>
{/* <Link to="/home">Home</Link> */}
</div>


    </div>;
}


export default Navbar;