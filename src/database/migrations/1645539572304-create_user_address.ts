import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserAddress1645539572304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "user_address",
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
              name: "user_id",
              type: "uuid",
              isNullable: false
            },
            {
              name: "street",
              type: "varchar",
              isNullable: false
            },
            {
              name: "neighborhood",
              type: "varchar",
              isUnique: true,
              isNullable: false
            },
            {
              name: "number",
              type: "varchar",
              isNullable: true
            },
            {
              name: "city",
              type: "varchar",
              isNullable: false
            },
            {
              name: "state",
              type: "varchar",
              isNullable: false
            },
            {
              name: "complement",
              type: "varchar",
              isNullable: true
            },
            {
              name: "zipcode",
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
          ],
          foreignKeys: [
            {
              name: "fk_user_address",
              columnNames: ["user_id"],
              referencedTableName: "user",
              referencedColumnNames: ["id"]
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("user_address")
    }

}
