import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [CatsController],
  imports: [UsersModule],
})
export class AppModule {}
