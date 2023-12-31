const  AlunoRepository  = require('../../infra/typeorm/repositories/aluno-repository')

class CreateAluno {
  
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const {
      nome,
      turma
    } = req.body
    const alunoCriado = await alunoRepository.create(nome, turma)

    if(alunoCriado.status === 201) {
      return res.status(alunoCriado.status).json(alunoCriado.data)
    }

    return res.status(alunoCriado.status).json(alunoCriado.error)
  }
}

module.exports = CreateAluno
