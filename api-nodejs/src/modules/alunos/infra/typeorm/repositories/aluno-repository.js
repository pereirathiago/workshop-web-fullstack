const { getRepository } = require('typeorm')
const Aluno = require('../entities/aluno')

class AlunoRepository {
  constructor() {
    this.repository = getRepository(Aluno)
  }

  async create(nome, turma) {
    const aluno = this.repository.create({ nome, turma })
    await this.repository.save(aluno)
    return aluno
  }
}

module.exports = AlunoRepository
