import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

// import { UserController } from './user/user.controller';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
  // controllers: [UserController],
  /* Commented out for reference
  controllers: [UserController],
  */
  providers: [],
})
export class AppModule {}
