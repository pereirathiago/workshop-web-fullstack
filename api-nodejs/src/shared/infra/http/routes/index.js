const { Router } = require('express')
const { alunosRoutes } = require('./alunos/alunos-routes')

const router = Router()

router.use('/alunos', alunosRoutes)

module.exports = { router }