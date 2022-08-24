import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import Cookies from 'js-cookie';


function FormLogin() {

    const loginPost = (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data)

        const headers = { 'Content-Type': 'application/json' }

        axios.post(`http://localhost/jwt/jwt/public/api/login`, data, { headers })

            .then((response) => {
              
                Cookies.set('jwt-token', response.data.authorisation.token)
                window.location.href = "/";
            })
            .catch((error) => {
                let messageError = error.response.data.message
                if(error.response.status == 500){
                    messageError ='E-mail e senha não correspondem ao nosso registro'
                }
                console.log(error.response.status)
                document.getElementById('message').innerHTML = ` <div class="alert alert-danger mt-3" role="alert">
                ${messageError}
            </div>`
            })
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <h3 className='text-center'>Entrar</h3>
                        <form onSubmit={loginPost}>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="email" name='email' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Senha</label>
                                <input type="password" name='password' className="form-control" i />
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                            <button className="btn btn-secondary ms-2"> <Link className="nav-link active" to={'cadastro'}>Cadastrar</Link></button>

                        </form>
                        <div id='message'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormLogin;