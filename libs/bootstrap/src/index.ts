import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';

export async function bootstrap(module: any): Promise<Handler> {
  const app = await NestFactory.create(module);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}