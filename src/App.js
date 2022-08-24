import React, { useState } from 'react';
import Aplication from './Components/Aplication/Aplication';
import RoutLoginCreate from './Components/RoutLoginCreate';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {

  const [altorization, setAltorization] = useState(false) 

  if (Cookies.get('jwt-token')) { 

    const token = Cookies.get('jwt-token')

    const headers = { "Authorization": `Bearer ${token}`,  'Content-Type': 'application/json' }

    axios.get('http://localhost/jwt/jwt/public/api/user', { headers })

       .then((response) => {
         setAltorization(true)
 
       })
       .catch((error) => {
           setAltorization(false)
           console.log(error)
       })
 }


 if(altorization == true){
    return (

      <>
      {/* <h1>autorizado</h1> */}
        <Aplication></Aplication>
      </>
    )

    } else {
    return (
      <>
      {/* <h1>nao autorizado</h1> */}
        <RoutLoginCreate></RoutLoginCreate>
      </>
    )
  }
}

export default App;
