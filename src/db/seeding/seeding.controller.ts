import { Controller } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Controller('seeding')
export class SeedingController {
  constructor(private readonly dataSource: DataSource) { }

  async seed() {
    await this.dataSource.initialize()

    await this.dataSource.transaction(async manager => {
      const userRepository = manager.getRepository(User)
      const userCreate = userRepository.create({
        first_name: 'Admin',
        second_name: 'Admin',
        first_lastName: 'Admin',
        second_lastName: 'Admin',
        email: process.env.SEED_EMAIL,
        password: await bcrypt.hash(process.env.SEED_PASSWORD, 8)
      })

      const userSave = await userRepository.save(userCreate)
      console.log(userSave)
    })
    await this.dataSource.destroy()
  }
}
