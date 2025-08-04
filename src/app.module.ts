import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
