import React from 'react';
import axios from 'axios';


function FormPost() {

    const token = localStorage.getItem("token")
    const headers = { "Authorization": `Bearer ${token}`, 'Content-Type': 'application/json' }

    function cleanForm() {
        document.getElementById('imputTitle').value = ''
        document.getElementById('imputDesc').value = ''
    }

    const createPost = (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data)

        axios.post(`http://localhost/jwt/apisanctum/public/api/user/posts/create`, data, { headers })

            .then((response) => {

                cleanForm()
                document.getElementById('message').innerHTML = ` <div class="alert alert-success mt-3" role="alert">
                Post adicionado
            </div>`

            })
            .catch((error) => {

                console.log(error.response)
                document.getElementById('message').innerHTML = ` <div class="alert alert-danger mt-3" role="alert">
                ${error.response.data.message}
            </div>`
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <h3 className='text-center'>Novo Post</h3>
                        <form onSubmit={createPost}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Titulo</label>
                                <input id="imputTitle" type="text" name="title" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Descriçao</label>
                                <textarea id="imputDesc" name="description" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            <button onClick={cleanForm} type="button" className="btn btn-secondary ms-1">Limpar</button>
                        </form>
                        <div id='message'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormPost;