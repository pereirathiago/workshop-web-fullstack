const { Router } = require('express')
const CreateAluno = require('../../../../../modules/alunos/use-cases/alunos/create-aluno')

const alunosRoutes = Router()

const createAluno = new CreateAluno()

// alunosRoutes.get('/', (req, res) => {
//   res.send('Hello World')
// })

alunosRoutes.post('/create', createAluno.handle)

module.exports = { alunosRoutes }