const { getRepository } = require('typeorm')
const Aluno = require('../entities/aluno')

class AlunoRepository {
  constructor() {
    this.repository = getRepository(Aluno)
  }

  async create(nome, turma) {
    try {
      const aluno = this.repository.create({ nome, turma })
      await this.repository.save(aluno)
      return {
        status: 201, 
        data: aluno
      }
    } catch (error) {
      console.error(error)
      return {
        status: 500,
        error: error.message
      }
    }
  }

  async list() {
    try {
      const alunos = await this.repository.find()
      return {
        status: 200,
        data: alunos
      }
    } catch (error) {
      return {
        status: 500,
        error: error.message
      }
    }
  }

  async get(id) {
    try {
      const aluno = await this.repository.findOne(id)

      if(!aluno) {      
        return {
          status: 404,
          error: 'Aluno não encontrado'
        }
      }

      return {
        status: 200,
        data: aluno
      }
    } catch (error) {
      return {
        status: 500,
        error: error.message
      }
    }
  }

  async delete(id) {
    try {
      const aluno = await this.repository.findOne(id)
      if(!aluno) {
        return {
          status: 404,
          error: 'Aluno não encontrado'
        }
      }
      await this.repository.delete(id)
      return {
        status: 200,
        data: aluno 
      }
    } catch (error) {
      return {
        status: 500,
        error: error.message
      }
    }
  }

  async update(id, nome, turma) {
    try {
      const aluno = await this.repository.findOne(id)
      if(!aluno) {
        return {
          status: 404,
          error: 'Aluno não encontrado'
        }
      }
      const alunoAtualizado = await this.repository.update(id, { nome, turma })
      return {
        status: 200,
        data: {
          id,
          nome,
          turma
        }
      }
    } catch (error) {
      return {
        status: 500,
        error: error.message
      }
    }
  }
}

module.exports = AlunoRepository
