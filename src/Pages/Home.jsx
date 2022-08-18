
// import {Box, Text} from "@chakra-ui/react";
// import {useState} from 'react';
import { Link } from "react-router-dom";
import '../App.css';


import React from 'react'

const Home = () => {
  return (
  <div className="navbar" border='3px solid black' w='90%' h='500px' margin='auto' >
   
<Link to='/' ><button bg='white' border='3px solid black' w='25%' p={4} color='black' margin='auto '  borderRadius='10px' >
Home
</button></Link>
    <Link to='/login'> <button bg='white' border='3px solid black'  w='25%' p={4} color='black' margin='auto' borderRadius='10px' >
  Login
</button></Link>
   


<Link to='/register' ><button bg='white' border='3px solid black' w='25%' p={4} color='black' margin='auto '  borderRadius='10px' >
Register
</button></Link>
<Link to='/employees' ><button bg='white' border='3px solid black' w='25%' p={4} color='black' margin='auto '  borderRadius='10px' >
Employees
</button></Link>
<Link to='/' ><button bg='white' border='3px solid black' w='25%' p={4} color='black' margin='auto '  borderRadius='10px' >
LogOut
</button></Link>



  </div>
  )
  
}

export default Home
