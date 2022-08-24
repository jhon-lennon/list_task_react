import React from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';


function logout(){

    const token = Cookies.get('jwt-token')

    const headers = { "Authorization": `Bearer ${token}`,  'Content-Type': 'application/json', 'Accept':'application/json' }
  

    axios.get(`http://localhost/jwt/jwt/public/api/logout`, { headers })

    .then((response) => {
        
      Cookies.remove('jwt-token')
        console.log(response)
         window.location.href = "/"; 
    })
    .catch((error) => {
        console.log(error)
       if(error.response.status == 401){
            window.location.href = "/";
        }
    })

}

function Header(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand"></span>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" to={''}>Inicio</Link>
                            </li>
                  {/*           <li className="nav-item">
                            <Link className="nav-link active" to={'newpost'}>Novo Post</Link>

                            </li> */}
                            <li className="nav-item ">
                            <Link className="nav-link active" to={'profile'}>{props.props.name}</Link>
                            </li>
                            <li className="nav-item">
                                <span onClick={logout} style={{cursor : "pointer"}} className="nav-link active" >Sair</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;