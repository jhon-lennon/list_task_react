
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

function Task({ taskk , setTasks}) {


    const [task, setTask] = useState([])

    useEffect(() => {
        const token = Cookies.get('jwt-token')

        const headers = { "Authorization": `Bearer ${token}` }

        axios.get('http://localhost/jwt/jwt/public/api/tasks/' + taskk.id, { headers })

            .then((response) => {
                console.log(response)
                setTask(response.data.data)
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status == 401) {
                    window.location.href = "/";
                }
            })

    }, [])

   let newdate = new Date(task.date).toLocaleDateString('en-CA');
    


    function refresh() {

        const token = Cookies.get('jwt-token')

        const headers = { "Authorization": `Bearer ${token}` }

        axios.get('http://localhost/jwt/jwt/public/api/tasks/' + taskk.id, { headers })

            .then((response) => {
                console.log(response)
                setTask(response.data.data)
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status == 401) {
                    window.location.href = "/";
                }
            })

    }

    const updateTask = (e) => {

        e.preventDefault();
        const formDatas = new FormData(e.target);
        let data = Object.fromEntries(formDatas);
        const token = Cookies.get('jwt-token')

        data.date = data.date+' '+data.time

        const headers = { "Authorization": `Bearer ${token}` }

        axios.post(`http://localhost/jwt/jwt/public/api/tasks/update/${task.id}`, data, { headers })

            .then((response) => {
                console.log(response)

                document.getElementById('messages'+task.id).innerHTML = ` <div class="alert alert-success mt-3" role="alert">
                Tarefa atualizado
            </div>`
                refresh()
            })
            .catch((error) => {
                console.log(error)
                document.getElementById('messages').innerHTML = ` <div class="alert alert-danger mt-3" role="alert">
                ${error.response.data.message}
            </div>`
            })
    }

    function updateStatus() {

        const token = Cookies.get('jwt-token')
        const headers = { "Authorization": `Bearer ${token}` }

        const data = task.status == 1 ? { "status": 0 } : { "status": 1 }
        console.log(data)

        axios.post(`http://localhost/jwt/jwt/public/api/tasks/update/${task.id}`, data, { headers })

            .then((response) => {
                console.log(response)
              refresh()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function deleteTask() {
       
        const token = Cookies.get('jwt-token')
        const headers = { "Authorization": `Bearer ${token}` }
        axios.get(`http://localhost/jwt/jwt/public/api/tasks/delete/${task.id}`, { headers })

            .then((response) => {

                console.log(response)
                window.location.href = "/";
            
            })
            .catch((error) => {
                console.log(error)
              
            })
    }

    return <>
        <tr> <td>{task.title} </td>
            <td >{new Date(task.date).toLocaleDateString('pt-BR')} </td>
            <td >{new Date(task.date).getHours() + ':' + new Date(task.date).getMinutes()} </td>
            {task.status == 1 ? <td style={{ "color": "green" }}>Concluida <i class="fa-solid fa-check"></i></td> : <td style={{ "color": "red" }}>A fazer <i class="fa-solid fa-xmark"></i></td>}
            <td>
                <button className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target={`#exampleModal${task.id}`} ><i class="fa-solid fa-pen"></i></button>
                <button onClick={deleteTask} className="btn btn-primary me-1"><i class="fa-solid fa-trash-can"></i></button>
                <button onClick={updateStatus} className="btn btn-primary me-1"><i class="fa-solid fa-circle-check"></i></button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModalshow${task.id}`}>ver</button>

            </td>
        </tr>
        <div class="modal fade" id={`exampleModalshow${task.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{task.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{task.description}</p>
                        <p style={{ "fontSize": "13px" }}>Dia {new Date(task.date).toLocaleDateString('pt-BR')} as {new Date(task.date).getHours() + ':' + new Date(task.date).getMinutes()} | status: {task.status == 1 ? <span style={{ "color": "green", "fontSize": "13px" }}>Concluida <i class="fa-solid fa-check"></i></span> : <span style={{ "color": "red", "fontSize": "13px" }}>A fazer <i class="fa-solid fa-xmark"></i></span>} </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id={`exampleModal${task.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Editar tarefa</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id={'form' + task.id} onSubmit={updateTask}>

                            <div class="mb-3">
                                <label class="form-label">Titulo</label>
                                <input type="text" defaultValue={task.title} name="title" class="form-control" ></input>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Descrição</label>
                                <textarea class="form-control" defaultValue={task.description} name="description" id="" cols="30" rows="3"></textarea>
                            </div>
                            <div class="mb-3">

                                <div className="row">

                                    <div className="col-6"> <label class="form-label">data</label><input class="form-control" Value={newdate} type="date" name="date"/></div>

                                    <div className="col-6"> <label class="form-label">Hora</label><input class="form-control" type="time" Value={new Date(task.date).getHours() + ':' + new Date(task.date).getMinutes()} name="time" /></div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                  
                    <div class="modal-footer">
                    <div id={"messages"+task.id}></div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default Task