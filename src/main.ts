import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './env.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService =
    app.get<ConfigService<EnvironmentVariables>>(ConfigService);
  const port = configService.get<number>('PORT');

  const options = new DocumentBuilder()
    .setTitle(configService.get('npm_package_name'))
    .setDescription(
      'Polymorphic test example APIs backend (NestJS, TypeORM)',
    )
    .setVersion(configService.get('npm_package_version'))
    .addServer('/api')
    .addBearerAuth()
    .addTag('health', 'Quickly returns the operational status of application')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.enableCors();
  
  await app.listen(port, () => {
    console.log('Server running at: ', port);
  });
}
bootstrap();
