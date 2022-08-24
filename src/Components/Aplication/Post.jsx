import React, { useEffect, useState } from "react";
import axios from "axios";

function Post() {

 /*    const [posts, setPosts] = useState(post)

    const token = localStorage.getItem("token")

    const headers = { "Authorization": `Bearer ${token}`, 'Content-Type': 'application/json' }

    function deletePost() {
        console.log(posts.id)
        axios.get(`http://localhost/jwt/apisanctum/public/api/user/posts/delete/${posts.id}`, { headers })

            .then((response) => {

                console.log(response)

                document.getElementById('postCard' + post.id).innerHTML = ''
            })
            .catch((error) => {
                console.log(error)
                if(error.response.status == 401){
                    window.location.href = "/";
                }
            })
    }

    const updatePost = (e) => {

        e.preventDefault();
        const formDatas = new FormData(e.target);
        const data = Object.fromEntries(formDatas);

        axios.post(`http://localhost/jwt/apisanctum/public/api/user/posts/update/${post.id}`, data, { headers })

            .then((response) => {
                setPosts(response.data.data)
                document.getElementById('message').innerHTML = ` <div class="alert alert-success mt-3" role="alert">
                Post atualizado
            </div>`

            })
            .catch((error) => {
                console.log(error)
                document.getElementById('message').innerHTML = ` <div class="alert alert-danger mt-3" role="alert">
                ${error.response.data.message}
            </div>`
            })
    }
 */
    return (
        <><h1>tt</h1>{/* <div id={'postCard' + posts.id} className="col-3" >
            <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div  className="card-header"><h5 className="card-title">{posts.title}</h5></div>
                <div style= {{maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}  className="card-body">
                    <p   className="card-text">{posts.description}</p>
                </div>
                <div className="card-footer bg-transparent border-dark"><button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={'#post' + post.id}>
                    Visualizar
                </button><span className="ms-5" style={{ fontSize: "15px" }}>{new Date(posts.created_at).toLocaleDateString('pt-BR')}</span>
                </div>
            </div>
        </div>
            <div className="modal fade" id={'post' + posts.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "40rem" }}>
                                <div className="card-header"><h5 className="card-title">{posts.title}</h5></div>
                                <div className="card-body">
                                    <p className="card-text">{posts.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Fechar</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#edit' + posts.id}>Editar</button>
                            <div className="card-footer bg-transparent border-dark"><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={'#excluir' + posts.id}>
                                Excluir
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={'excluir' + post.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <strong>Quer realmente excluir esse post ?</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button onClick={deletePost} type="button" className="btn btn-danger" data-bs-dismiss="modal">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={'edit' + posts.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Atualizar Dados</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updatePost}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Titulo</label>
                                    <input type="text" defaultValue={posts.title} name="title" className="form-control" id="textTitle" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Post</label>
                                    <textarea name="description" defaultValue={posts.description} className="form-control" id="textPost" aria-describedby="emailHelp" />

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary" >Atualizar</button>
                                </div>
                            </form>
                            <div id='message'>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Post;