import axios from 'axios'
import { useEffect, useState } from 'react'

export function Home() {
    const [alunos, setAlunos] = useState([])
    const getAlunos = () => {
        axios.get('http://localhost:3333/alunos').then((response) => {
            console.log(response)
        })
    }
    useEffect(() => {
        getAlunos()
    }, [alunos])

    return (
        <div className="container d-flex flex-column align-items-center ">
            <h1 className="text-center my-5">Crud Alunos</h1>
            <table class="table w-50">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Turma</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <div>
                                <button type="button" class="btn btn-danger">
                                    Excluir
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-primary mx-2"
                                >
                                    Visualizar
                                </button>
                                <button type="button" class="btn btn-success">
                                    Editar
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
