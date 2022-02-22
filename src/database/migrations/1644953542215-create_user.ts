import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1644953542215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: "user",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              isUnique: true,
              generationStrategy: 'uuid',
              default: `uuid_generate_v4()`
            },
            {
              name: "name",
              type: "varchar",
              isNullable: false
            },
            {
              name: "email",
              type: "varchar",
              isUnique: true,
              isNullable: false
            },
            {
              name: "phone",
              type: "varchar",
              isNullable: true
            },
            {
              name: "password",
              type: "varchar",
              isNullable: false
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("user")
    }
}
