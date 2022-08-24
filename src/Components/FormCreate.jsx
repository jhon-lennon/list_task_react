import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

function FormCreate() {


    const createUser = (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data)

        const headers = { 'Content-Type': 'application/json' }

        axios.post(`http://localhost/jwt/apisanctum/public/api/auth/register`, data, { headers })

            .then((response) => {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                console.log(localStorage.getItem("token"))
                window.location.href = "/";
            })
            .catch((error) => {
                let messageError = error.response.data.message
                if (error.response.status == 500) {
                    messageError = 'E-mail e senha não correspondem ao nosso registro'
                }
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

                        <h3 className='text-center'>Cadastro</h3>
                        <form onSubmit={createUser}>

                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input type="text" name='name' className="form-control" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name='email' className="form-control" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input type="password" name='password' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmar senha</label>
                                <input type="password" name='password_confirmation' className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button className="btn btn-secondary ms-2"> <Link className="nav-link active" to={'login'}>Entrar</Link></button>


                        </form>
                        <div id='message'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormCreate;