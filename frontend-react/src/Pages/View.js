import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function View() {
    const [nome, setNome] = useState('')
    const [turma, setTurma] = useState('')
    const navigate = useNavigate()

    let { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:3333/alunos/' + id).then((res) => {
            setNome(res.data.nome)
            setTurma(res.data.turma)
        })
    }, [])

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="my-5">Cadastrar aluno</h1>
            <form className="w-25">
                <div class="mb-3">
                    <label for="nome" class="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="nome"
                        value={nome}
                        disabled
                    />
                </div>
                <div class="mb-3">
                    <label for="turma" class="form-label">
                        Turma
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="turma"
                        value={turma}
                        disabled
                    />
                </div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Voltar
                </button>
            </form>
        </div>
    )
}
