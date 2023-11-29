const AlunoRepository = require('../../infra/typeorm/repositories/aluno-repository')

class GetAluno {
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const id = req.params.id

    const aluno = await alunoRepository.get(id)

    if(aluno.status === 200) {
      return res.status(aluno.status).json(aluno.data)
    }

    return res.status(aluno.status).json(aluno.error)
  }
}

module.exports = GetAluno