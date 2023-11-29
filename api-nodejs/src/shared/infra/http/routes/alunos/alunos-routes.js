const { Router } = require('express')
const CreateAluno = require('../../../../../modules/alunos/use-cases/alunos/create-aluno')
const ListAluno = require('../../../../../modules/alunos/use-cases/alunos/list-aluno')
const GetAluno = require('../../../../../modules/alunos/use-cases/alunos/get-aluno')
const DeleteAluno = require('../../../../../modules/alunos/use-cases/alunos/delete-aluno')
const UpdateAluno = require('../../../../../modules/alunos/use-cases/alunos/update-aluno')

const alunosRoutes = Router()

const createAluno = new CreateAluno()
const listAluno = new ListAluno()
const getAluno = new GetAluno()
const deleteAluno = new DeleteAluno()
const updateAluno = new UpdateAluno()

// alunosRoutes.get('/', (req, res) => {
//   res.send('Hello World')
// })

alunosRoutes.post('/create', createAluno.handle)
alunosRoutes.get('/list', listAluno.handle)
alunosRoutes.get('/:id', getAluno.handle)
alunosRoutes.delete('/:id', deleteAluno.handle)
alunosRoutes.put('/:id', updateAluno.handle)

module.exports = { alunosRoutes }