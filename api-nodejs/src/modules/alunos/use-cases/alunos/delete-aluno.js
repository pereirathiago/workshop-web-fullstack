const AlunoRepository = require('../../infra/typeorm/repositories/aluno-repository')

class DeleteAluno {
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const id = req.params.id

    const alunos = await alunoRepository.delete(id)

    if(alunos.status === 200) {
      return res.status(alunos.status).json(alunos.data)
    }

    return res.status(alunos.status).json(alunos.error)
  }
}

module.exports = DeleteAluno