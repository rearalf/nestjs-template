import { SeedingController } from './seeding.controller';
import { databaseConnect } from 'src/config/typeorm';

const runSeed = () => {
  const running = new SeedingController(databaseConnect)
  running.seed()
}

runSeed()