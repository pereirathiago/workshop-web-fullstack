const { Aluno } = require('../../infra/typeorm/entities/aluno')
const  AlunoRepository  = require('../../infra/typeorm/repositories/aluno-repository')

class CreateAluno {
  
  async handle(req, res) {
    const alunoRepository = new AlunoRepository()

    const {
      nome,
      turma
    } = req.body
    const alunoCriado = await alunoRepository.create(nome, turma)

    console.log(alunoCriado)
    return res.json({ message: 'Hello World' })
  }
}

module.exports = CreateAluno
