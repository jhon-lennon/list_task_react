import React, { useEffect, useState } from "react";
import "../../fontawesome/css/all.css"
import Task from "./Task";
import axios from "axios";
import Cookies from 'js-cookie';



function Home() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const token = Cookies.get('jwt-token')

        const headers = { "Authorization": `Bearer ${token}` }

        axios.get('http://localhost/jwt/jwt/public/api/tasks', { headers })

            .then((response) => {
                console.log(response)
                setTasks(response.data.data)
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status == 401) {
                    window.location.href = "/";
                }
            })

    }, [])

  

    return (
        <>
            <div className="container">
                <div className="row">


                    <h2 className="text-center my-3">Tarefas</h2>
                    {tasks.length == 0 ? <h4 className="text-center my-3">Voce nao tem tarefas</h4> : ''}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Tarefa</th>
                                <th scope="col">Data</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Status</th>
                                <th scope="col">Opções</th>

                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((taskk) => { return <Task taskk={taskk} setTasks={setTasks} ></Task>})}
                                {/* 
                                  <tr> <td>{task.task} </td>
                                    <td >{new Date(task.date).toLocaleDateString('pt-BR')} </td>
                                    <td >{new Date(task.date).getHours() + ':' + new Date(task.date).getMinutes()} </td>
                                    {task.confirmed == 1 ? <td style={{"color":"green"}}>Concluida <i class="fa-solid fa-check"></i></td> : <td style={{"color":"red"}}>A fazer <i class="fa-solid fa-circle-x"></i></td>}
                                    <td>
                                        <button className="btn btn-primary me-1"><i class="fa-solid fa-pen"></i></button>
                                        <button className="btn btn-primary me-1"><i class="fa-solid fa-trash-can"></i></button>
                                        <button className="btn btn-primary me-1"><i class="fa-solid fa-circle-check"></i></button>
                                        <button className="btn btn-primary me-1">Ver</button>

                                    </td>
                                </tr>  */}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home;