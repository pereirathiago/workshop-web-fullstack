const  AlunoRepository  = require('../../infra/typeorm/repositories/aluno-repository')

class UpdateAluno {
  
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const id = req.params.id

    const {
      nome,
      turma
    } = req.body
    const alunoCriado = await alunoRepository.update(id, nome, turma)

    if(alunoCriado.status === 200) {
      return res.status(alunoCriado.status).json(alunoCriado.data)
    }

    return res.status(alunoCriado.status).json(alunoCriado.error)
  }
}

module.exports = UpdateAluno
