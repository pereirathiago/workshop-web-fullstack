import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const [alunos, setAlunos] = useState([])
    const navigate = useNavigate()
    const getAlunos = () => {
        axios.get('http://localhost:3333/alunos/list').then((res) => {
            setAlunos(res.data)
        })
    }

    const deleteAluno = (id) => {
        axios.delete('http://localhost:3333/alunos/' + id).then(() => {
            getAlunos()
        })
    }

    useEffect(() => {
        getAlunos()
    }, [])

    return (
        <div className="container d-flex flex-column align-items-center ">
            <h1 className="text-center my-5">Crud Alunos</h1>
            <button
                type="button"
                className="btn btn-primary mb-5"
                onClick={() => {
                    navigate('/create')
                }}
            >
                Adicionar aluno
            </button>
            <table className="table w-50">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Turma</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <th scope="row">1</th>
                            <td>{aluno.nome}</td>
                            <td>{aluno.turma}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => {
                                        deleteAluno(aluno.id)
                                    }}
                                >
                                    Excluir
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary mx-2"
                                    onClick={() => {
                                        navigate('/view/' + aluno.id)
                                    }}
                                >
                                    Visualizar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        navigate('/edit/' + aluno.id)
                                    }}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
