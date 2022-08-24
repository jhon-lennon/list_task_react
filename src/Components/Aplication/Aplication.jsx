import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route,} from "react-router-dom"
import FormPost from "./FormPost";
import Profile from "./Profile";
import Cookies from 'js-cookie';


function Aplication(){

    const [user, setUser] = useState([])

    const token = Cookies.get('jwt-token')

   const headers = { "Authorization": `Bearer ${token}` }


function getUser(){
axios.get('http://localhost/jwt/jwt/public/api/user', { headers })

       .then((response) => {
         
           setUser(response.data.user)
       })
       .catch((error) => {
           console.log(error.response.data)
           if(error.response.status == 401){
            window.location.href = "/";
        }
       })
}

useEffect(() => {
   
getUser()

}, [])

    return(
        <>
        <Header props={user}></Header>
         <Routes>
                <Route path="*" element={<Home></Home>} />
           {/*      <Route path="newpost" element={<FormPost></FormPost>} />  */}
                <Route path="profile" element={<Profile user={user}></Profile> } /> 
            </Routes>
        </>
    )
}

export default Aplication