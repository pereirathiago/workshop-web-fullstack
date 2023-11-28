const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class createAluno1701198339108 {

  async up(queryRunner) {
    await queryRunner.createTable({
      name: 'alunos',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'nome',
          type: 'varchar',
          length: 255,
          isNullable: false,
        },
        {
          name: 'turma',
          type: 'varchar',
          length: 255,
          isNullable: false,
        }        
      ]
    })
  }

  async down(queryRunner) {
    await queryRunner.dropTable('alunos')
  }
}
