import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1'); // Set a global prefix for all routes
  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
