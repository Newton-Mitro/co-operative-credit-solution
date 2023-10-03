import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
      stopAtFirstError: true,
      disableErrorMessages: false,
      // exceptionFactory: (errors: ValidationError[]) => {
      //   try {
      //     const result = errors.map((error) => ({
      //       property: error.property,
      //       message: error.constraints[Object.keys(error.constraints)[0]],
      //     }));
      //     return new BadRequestException(result);
      //   } catch (error) {
      //     console.log(errors);

      //     return new BadRequestException(errors);
      //   }
      // },
    }),
  );

  await app.listen(3000);
}
bootstrap();
