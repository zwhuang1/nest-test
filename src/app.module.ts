import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

// import { UserController } from './user/user.controller';
const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
  ],
  // controllers: [UserController],
  providers: [],
})
export class AppModule {}
