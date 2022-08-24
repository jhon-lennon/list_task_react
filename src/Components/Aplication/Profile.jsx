import axios from 'axios';
import Cookies from 'js-cookie';

import React, { useState, useEffect } from 'react';


function Profile(props) {

    const [user, setUser] = useState([props])
    
    const token = Cookies.get('jwt-token')

    const headers = { "Authorization": `Bearer ${token}` }


    function getUser() {
        axios.get('http://localhost/jwt/jwt/public/api/user', { headers })

            .then((response) => {

                setUser(response.data.user)

            })
            .catch((error) => {
                console.log(error.response.status)
                if(error.response.status == 401){
                    window.location.href = "/";
                }
            })
    }


    useEffect(() => {

        getUser()


    }, [])


    const updateUser = (e) => {
        
        e.preventDefault();
        const formDatas = new FormData(e.target);
        const data = Object.fromEntries(formDatas);

        axios.post(`http://localhost/jwt/jwt/public/api/user/update`, data, { headers })

            .then((response) => {
                console.log(response)
                setUser(response.data.data)
                document.getElementById('message').innerHTML = ` <div class="alert alert-success mt-3" role="alert">
              Dados atualizado
          </div>`


            })
            .catch((error) => {
                console.log(error)
                document.getElementById('message').innerHTML = ` <div class="alert alert-danger mt-3" role="alert">
              ${error.response.data.message}
          </div>`
            })
            
    }

    function deleteUser(){

        axios.get(`http://localhost/jwt/jwt/public/api/user/delete`,{ headers })

        .then((response) => {

            window.location.href = "/";
        })
        .catch((error) => {
            console.log(error)

        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-5">

                        {<div className="text-center mt-5">

                            <h3 className='mt-3'>Perfil</h3>
                            <p>Nome: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Cadatrado em: {new Date(user.created_at).toLocaleDateString('pt-BR')}</p>
                        </div>}

                        <div className='text-center'>

                            <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Editar
                            </button>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Excluir Perfil
                            </button>
                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Excluir perfil</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Deseja realmente excluir sua conta ?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" onClick={deleteUser} className="btn btn-primary">Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Atualizar Dados</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={updateUser}>

                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                                                <input type="text" defaultValue={user.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="email" defaultValue={user.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="submit" className="btn btn-primary">Atualizar</button>
                                            </div>
                                        </form>
                                        <div id='message'>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;