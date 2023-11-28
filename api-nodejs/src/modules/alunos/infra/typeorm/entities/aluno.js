const { EntitySchema } = require('typeorm');

module.exports = class Aluno {
  constructor(nome, turma) {
    this.nome = nome;
    this.turma = turma;
  }
}

module.exports = new EntitySchema({
  name: 'Aluno',
  tableName: 'alunos',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    nome: {
      type: 'varchar',
    },
    turma: {
      type: 'varchar',
    },
  },
});
