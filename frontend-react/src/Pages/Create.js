import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Create() {
    const [nome, setNome] = useState('')
    const [turma, setTurma] = useState('')
    const navigate = useNavigate()

    const handleNomeChange = (event) => {
        setNome(event.target.value)
    }

    const handleTurmaChange = (event) => {
        setTurma(event.target.value)
    }

    const enviarForm = () => {
        axios
            .post('http://localhost:3333/alunos/create', {
                nome,
                turma,
            })
            .then(() => {
                navigate('/')
            })
    }

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
                        onChange={handleNomeChange}
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
                        onChange={handleTurmaChange}
                    />
                </div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={enviarForm}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
