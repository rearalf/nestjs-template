import { MigrationInterface, QueryRunner } from "typeorm";

export class Init21733255709396 implements MigrationInterface {
    name = 'Init21733255709396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission_user" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "user_id" integer, "permission_id" integer, CONSTRAINT "PK_8ec1323d871577a8795e54c9c4b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission_user" ADD CONSTRAINT "FK_7a1e52a7e131004fc27275c915d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_user" ADD CONSTRAINT "FK_8b7f01788089df44efe7bbcf68d" FOREIGN KEY ("permission_id") REFERENCES "permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_user" DROP CONSTRAINT "FK_8b7f01788089df44efe7bbcf68d"`);
        await queryRunner.query(`ALTER TABLE "permission_user" DROP CONSTRAINT "FK_7a1e52a7e131004fc27275c915d"`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "permission_user"`);
    }

}
