// aluno.entity.js

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity('alunos')
class Aluno {

  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome;

  @Column({ type: 'varchar', length: 255, nullable: false })
  turma;
}

module.exports = Aluno;
