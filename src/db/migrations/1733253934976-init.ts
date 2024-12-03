import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1733253934976 implements MigrationInterface {
    name = 'Init1733253934976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "name" text NOT NULL, "description" text NOT NULL, CONSTRAINT "UQ_240853a0c3353c25fb12434ad33" UNIQUE ("name"), CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "first_name" text NOT NULL, "first_lastName" text NOT NULL, "second_name" text NOT NULL, "second_lastName" text NOT NULL, "married_name" text, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_rol" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "user_id" integer, "rol_id" integer, CONSTRAINT "PK_3bea99cfa674e8767c7fbb51f8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rol" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "name" text NOT NULL, CONSTRAINT "PK_c93a22388638fac311781c7f2dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rol_permission" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "rol_id" integer, "permission_id" integer, CONSTRAINT "PK_28b955d6d99e5a539069f5e66c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_rol" ADD CONSTRAINT "FK_46dc4d18f715459d7bf682d32b9" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_rol" ADD CONSTRAINT "FK_e959bd66b9f5a8c77de4fd589eb" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rol_permission" ADD CONSTRAINT "FK_a5e58bdfdf9924e8f5202d092f6" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rol_permission" ADD CONSTRAINT "FK_761f5a92bdbccb871184d9119a4" FOREIGN KEY ("permission_id") REFERENCES "permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rol_permission" DROP CONSTRAINT "FK_761f5a92bdbccb871184d9119a4"`);
        await queryRunner.query(`ALTER TABLE "rol_permission" DROP CONSTRAINT "FK_a5e58bdfdf9924e8f5202d092f6"`);
        await queryRunner.query(`ALTER TABLE "user_rol" DROP CONSTRAINT "FK_e959bd66b9f5a8c77de4fd589eb"`);
        await queryRunner.query(`ALTER TABLE "user_rol" DROP CONSTRAINT "FK_46dc4d18f715459d7bf682d32b9"`);
        await queryRunner.query(`DROP TABLE "rol_permission"`);
        await queryRunner.query(`DROP TABLE "rol"`);
        await queryRunner.query(`DROP TABLE "user_rol"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "permission"`);
    }

}
