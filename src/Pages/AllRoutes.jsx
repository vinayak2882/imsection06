import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Login from './Login'

import List from './List'
import Register from './Register';
import ApiLink from '../Api/ApiLink';
// import { uuid } from "uuidv4";


const AllRoutes = () => {


   
    const [contacts, setContacts] = useState([]);


    const resgisterHandler = async (contact)=>{
        console.log(contact)
        const request ={
            // id,
            ...contact,
        };

        const response = await ApiLink.post("/auth/register", request);
        console.log(response)
        setContacts([...contacts], response.data)

    }

  return (
  <>
  <Routes>
    {/* <Route path='/' element={<Home/>} ></Route> */}
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>} render={(props)=>(<Register {...props} resgisterHandler={resgisterHandler}/>)} ></Route>
    <Route path='/employees' element={<List/>} ></Route>
  </Routes>
  </>
  )
}

export default AllRoutes


//  
