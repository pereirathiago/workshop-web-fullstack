const AlunoRepository = require('../../infra/typeorm/repositories/aluno-repository')

class ListAluno {
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const alunos = await alunoRepository.list()

    if(alunos.status === 200) {
      return res.status(alunos.status).json(alunos.data)
    }

    return res.status(alunos.status).json(alunos.error)
  }
}

module.exports = ListAluno