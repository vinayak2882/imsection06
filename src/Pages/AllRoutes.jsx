import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import List from './List'
import Register from './Register';
import ApiLink from '../Api/ApiLink';

const AllRoutes = () => {


    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);


    const resgisterHandler = async (ApiLink)=>{
        console.log(ApiLink)
        const request ={
            id:uuid(),
            ...ApiLink,
        };

        const response = await Api.post("/auth/register", request);
        console.log(response)
        setContacts([...contacts], response.data)

    }

  return (
  <>
  <Routes>
    {/* <Route path='/' element={<Home/>} ></Route> */}
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' render={(props)=>(<Register {...props} resgisterHandler={resgisterHandler}/>)} ></Route>
    <Route path='/employees' element={<List/>} ></Route>
  </Routes>
  </>
  )
}

export default AllRoutes
